// Ebéd napi időzítés
let img_lunch_images = [
    {
    date: "2024-05-21",
    url: "img/0521.png"
  },
    {
    date: "2024-05-22",
    url: "img/e0522.png"
  },
    {
    date: "2024-05-23",
    url: "img/e0523.png"
  },
    {
    date: "2024-05-24",
    url: "img/e0524.png"
  },
    {
    date: "2024-05-27",
    url: "img/e0527.png"
  },
    {
    date: "2024-05-28",
    url: "img/e0528.png"
  },
    {
    date: "2024-05-29",
    url: "img/e0529.png"
  },
    {
    date: "2024-05-30",
    url: "img/e0530.png"
  },
    {
    date: "2024-05-31",
    url: "img/e0531.png"
  },
    {
    date: "2024-06-03",
    url: "img/e0603.png"
  },
    {
    date: "2024-06-04",
    url: "img/e0604.png"
  },
    {
    date: "2024-06-05",
    url: "img/e0605.png"
  },
    {
    date: "2024-06-06",
    url: "img/e0606.png"
  },
    {
    date: "2024-06-07",
    url: "img/e0607.png"
  },
    {
    date: "2024-06-10",
    url: "img/e0610.png"
  },
    {
    date: "2024-06-11",
    url: "img/e0611.png"
  },
    {
    date: "2024-06-12",
    url: "img/e0612.png"
  },
    {
    date: "2024-06-13",
    url: "img/e0613.png"
  },
    {
    date: "2024-06-14",
    url: "img/e0614.png"
  },
    {
    date: "2024-06-17",
    url: "img/e0617.png"
  },
    {
    date: "2024-06-18",
    url: "img/e0618.png"
  },
    {
    date: "2024-06-19",
    url: "img/e0619.png"
  },
    {
    date: "2024-06-20",
    url: "img/e0620.png"
  },
    {
    date: "2024-06-21",
    url: "img/e0621.png"
  }
];

//get today date & format to YYYY-MM-DD
var today = new Date();
today = today.toISOString().split('T')[0];

//check today date in ring image array
object = img_lunch_images.find(o => Object.entries(o).find(([k, value]) => k === 'date' && value === today) !== undefined);

//if today date in array change image url
if(object != null){

  $("#lunch_image").attr("src",object.url);
}

// Ebéd napi időzítés
let img_aktualis_images = [
    {
    date: "2024-05-23",
    url: "img/helyettesites.png"
  },
    {
    date: "2024-05-24",
    url: "img/helyettesites.png"
  },
    {
    date: "2024-05-27",
    url: "img/aktualis.png"
  },
    {
    date: "2024-05-28",
    url: "img/aktualis.png"
  },
    {
    date: "2024-05-29",
    url: "img/aktualis.png"
  },
    {
    date: "2024-05-30",
    url: "img/aktualis.png"
  },
    {
    date: "2024-05-31",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-03",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-04",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-05",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-06",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-07",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-10",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-11",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-12",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-13",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-14",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-17",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-18",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-19",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-20",
    url: "img/aktualis.png"
  },
    {
    date: "2024-06-21",
    url: "img/aktualis.png"
  }
];
//get today date & format to YYYY-MM-DD
var today = new Date();
today = today.toISOString().split('T')[0];

//check today date in ring image array
object = img_aktualis_images.find(o => Object.entries(o).find(([k, value]) => k === 'date' && value === today) !== undefined);

//if today date in array change image url
if(object != null){

  $("#aktualis_image").attr("src",object.url);
}
    