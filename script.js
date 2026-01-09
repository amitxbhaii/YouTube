function searchYT(e) {
  e.preventDefault();

  const q = document.getElementById("query").value.trim();
  if (!q) return;

  window.location.href =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(q) +
    "&sp=EgIIAQ%3D%3D"; // Last 1 hour
}
