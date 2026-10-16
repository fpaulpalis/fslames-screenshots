(function () {
  "use strict";

  var groups = window.SCREENSHOT_GROUPS || [];
  var gallery = document.getElementById("gallery");
  var toc = document.getElementById("toc");
  var search = document.getElementById("search");
  var featureSelect = document.getElementById("feature");
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");
  var viewer = document.getElementById("viewer");
  var viewerImg = document.getElementById("viewer-img");
  var viewerTitle = document.getElementById("viewer-title");
  var openTab = document.getElementById("open-tab");
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var closeBtn = document.getElementById("close");

  // Relative to index.html, so the site works under a repository subpath.
  function label(item) {
    return item.section ? item.title + " · " + item.section : item.title;
  }

  // Flatten to one list in display order, and remember each item's group.
  var all = [];
  var features = {};
  groups.forEach(function (group, gi) {
    group.items.forEach(function (item) {
      var entry = {
        file: item.file,
        feature: item.feature,
        title: item.title,
        section: item.section || "",
        desc: item.desc || "",
        group: group.title,
        groupId: "group-" + gi,
        text: [item.title, item.section || "", item.feature, item.file, group.title].join(" ").toLowerCase()
      };
      all.push(entry);
      features[item.feature] = true;
    });
  });

  Object.keys(features).sort().forEach(function (f) {
    var opt = document.createElement("option");
    opt.value = f;
    opt.textContent = f.charAt(0).toUpperCase() + f.slice(1);
    featureSelect.appendChild(opt);
  });

  // Table of contents.
  groups.forEach(function (group, gi) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#group-" + gi;
    a.textContent = group.title;
    li.appendChild(a);
    toc.appendChild(li);
  });

  // Build the gallery once; filtering only toggles visibility.
  var cards = [];
  var sections = [];
  groups.forEach(function (group, gi) {
    var section = document.createElement("section");
    section.className = "group";
    section.id = "group-" + gi;

    var h2 = document.createElement("h2");
    h2.textContent = group.title;
    section.appendChild(h2);

    var grid = document.createElement("div");
    grid.className = "grid";
    section.appendChild(grid);

    group.items.forEach(function (item) {
      var entry = all[cards.length];
      var fig = document.createElement("figure");
      fig.className = "card";

      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Open full size: " + label(item));

      var img = document.createElement("img");
      img.src = item.file;
      img.alt = label(item);
      img.loading = "lazy";
      img.decoding = "async";
      btn.appendChild(img);
      fig.appendChild(btn);

      var cap = document.createElement("figcaption");
      var title = document.createElement("div");
      title.className = "title";
      title.textContent = item.title;
      cap.appendChild(title);
      if (item.section) {
        var sec = document.createElement("div");
        sec.className = "section";
        sec.textContent = item.section;
        cap.appendChild(sec);
      }
      if (item.desc) {
        var desc = document.createElement("p");
        desc.className = "desc";
        desc.textContent = item.desc;
        cap.appendChild(desc);
      }
      var file = document.createElement("div");
      file.className = "file";
      file.textContent = item.file;
      cap.appendChild(file);
      fig.appendChild(cap);

      grid.appendChild(fig);
      cards.push({ el: fig, entry: entry, button: btn });
      btn.addEventListener("click", function () { openViewer(cards.indexOf(cardFor(fig))); });
    });

    gallery.appendChild(section);
    sections.push({ el: section, groupId: "group-" + gi });
  });

  function cardFor(el) {
    for (var i = 0; i < cards.length; i++) if (cards[i].el === el) return cards[i];
    return null;
  }

  // Filtering by search text and feature.
  function applyFilter() {
    var q = search.value.trim().toLowerCase();
    var f = featureSelect.value;
    var shown = 0;
    var visibleByGroup = {};

    cards.forEach(function (c) {
      var ok = (!q || c.entry.text.indexOf(q) !== -1) && (!f || c.entry.feature === f);
      c.el.hidden = !ok;
      if (ok) {
        shown++;
        visibleByGroup[c.entry.groupId] = true;
      }
    });

    sections.forEach(function (s) {
      s.el.hidden = !visibleByGroup[s.groupId];
    });

    // Keep TOC links in step with which groups have results.
    Array.prototype.forEach.call(toc.children, function (li, i) {
      li.hidden = !visibleByGroup["group-" + i];
    });

    count.textContent = shown + " of " + cards.length + " screenshots";
    empty.hidden = shown !== 0;
  }

  search.addEventListener("input", applyFilter);
  featureSelect.addEventListener("change", applyFilter);
  applyFilter();

  // Viewer: the list of currently visible cards, in order.
  var current = -1;
  var visibleCards = [];

  function openViewer(index) {
    visibleCards = cards.filter(function (c) { return !c.el.hidden; });
    var target = cards[index];
    current = visibleCards.indexOf(target);
    if (current === -1) return;
    showCurrent();
    if (typeof viewer.showModal === "function") viewer.showModal();
    else viewer.setAttribute("open", "");
    closeBtn.focus();
  }

  function showCurrent() {
    var c = visibleCards[current];
    viewerImg.src = c.entry.file;
    viewerImg.alt = label(c.entry);
    viewerTitle.textContent = label(c.entry) + " (" + c.entry.file + ")";
    openTab.href = c.entry.file;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === visibleCards.length - 1;
    document.querySelector("#viewer .viewer-body").scrollTop = 0;
  }

  function step(delta) {
    var next = current + delta;
    if (next < 0 || next >= visibleCards.length) return;
    current = next;
    showCurrent();
  }

  function closeViewer() {
    if (typeof viewer.close === "function") viewer.close();
    else viewer.removeAttribute("open");
  }

  prevBtn.addEventListener("click", function () { step(-1); });
  nextBtn.addEventListener("click", function () { step(1); });
  closeBtn.addEventListener("click", closeViewer);

  // Click the dark backdrop (outside the content) to close.
  viewer.addEventListener("click", function (e) {
    if (e.target === viewer) closeViewer();
  });

  // Keyboard: arrows move between screenshots (Escape closes natively).
  viewer.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
  });
})();
