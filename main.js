// import API_KEY from "./env.js";
// let ipInput = document.querySelector(".ip-search__ip");
// let statsIP = document.querySelector(".stats__ip");
// let statsLocation = document.querySelector(".stats__location");
// let statsTimezone = document.querySelector(".stats__timezone");
// let statsIsp = document.querySelector(".stats__isp");

// function initializingMap() {
//   var container = L.DomUtil.get("map");
//   if (container != null) {
//     container._leaflet_id = null;
//   }
// }

// function markCoordinates(lat, long) {
//   initializingMap();
//   let map = L.map("map").setView([lat, long], 13);

//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution: "© OpenStreetMap",
//   }).addTo(map);

//   L.marker([lat, long]).addTo(map);
// }

// function displayStats(ip, city, country, timezone, isp) {
//   statsIP.innerText = ip;
//   statsLocation.innerText = `${city}, ${country}`;
//   statsTimezone.innerText = timezone;
//   statsIsp.innerText = isp;
// }

// function fetchData(ipInput) {
//   console.log(API_KEY);
//   let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
//   if (ipInput) url += `&ipAddress=${ipInput}`;
//   fetch(url)
//     .then((res) => {
//       if (res.statusText !== "OK") {
//         alert(
//           `Sorry, the IP address or domain you've entered does not exist. Try an other search! `
//         );
//       } else {
//         return res.json();
//       }
//     })
//     .then((res) => {
//       markCoordinates(res.location.lat, res.location.lng);
//       displayStats(
//         res.ip,
//         res.location.city,
//         res.location.country,
//         res.location.timezone,
//         res.isp
//       );
//     })
//     .catch((err) => console.log(err));
// }

// window.addEventListener("load", () => {
//   ipInput.value = "";
//   ipInput.innerText = "";
//   fetchData();
// });

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (ipInput.value.trim().length > 0) {
//     fetchData(ipInput.value);
//   } else {
//     fetchData();
//   }
// });
