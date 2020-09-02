import React, { useState, useEffect } from "react";
import axios from "axios";
import Timeout from "await-timeout";
import Image from "./Image";

function NasaImages() {
  const [getImages, showImages] = useState([]);

  useEffect(() => {
    async function fetchNasaImages() {
      const res = await axios.get("https://apodapi.herokuapp.com/api/?count=5");
      await Timeout.set(3000);
      console.log("wait 3 sec");
      showImages(res.data);
    }
    fetchNasaImages();
  }, []);

  return (
    <div>
      <div>
        <h1>Nasa Images</h1>
      </div>
      <div className="row">
        {getImages.map((image) => (
          <Image img={image.url} />
        ))}
      </div>
    </div>
  );
}

export default NasaImages;