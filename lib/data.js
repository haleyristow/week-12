//import fs from "fs";
//import path from "path";
import got from 'got';

const dataURL =
  "https://dev-55-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1";

export async function getAllIds() {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  const idList1 = jsonObj.map(function (item) {
    return {
      params: {
        id: item.ID.toString()
      }
    };
  });


  return idList1;
}

export async function getSortedList() {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort(
    function (a, b) {
      return a.post_title.localeCompare(b.post_title);
    }
  );


  const sortedList1 = jsonObj.map(function (item) {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });

  return sortedList1;
}



export async function getData(idRequested) {

  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  const objMatch = jsonObj.filter(
    function (obj) {
      return obj.ID.toString() === idRequested;
    }
  );


  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned;


}