(function(window, undefined) {
  var dictionary = {
    "c1854184-29d3-404e-9757-7a09ffe0c805": "School Lunch Program",
    "8637cb02-2950-4c61-833e-d461e5d824bd": "FS / SO / Acute Need",
    "bdab195c-f009-44f0-a91f-2e9fe4d15a76": "Nantucket (Region)",
    "a870cff2-c3fe-4ede-8bd8-db0ab99c69c1": "FS / Social Outcomes",
    "175e44a4-7e8b-45e9-a65b-261324e175fa": "Housing Estimate",
    "9d3297bf-d575-4b0d-a5bc-ab813c1b98fd": "Food System",
    "e9bc852e-8186-4689-9ffd-50b1925c4956": "FS / SO / AN / Supply",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "ac8fd0ed-4f86-42b3-b1e8-ef1c26d79c28": "FS / Resilience",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);