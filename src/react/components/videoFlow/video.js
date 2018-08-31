import React from "react";
import ReactPlayer from "react-player";

export default ({
  question,
  playing,
  videoUrl,
  onProgress,
  getClickPosition
}) => (
  <div className="u-component">
    <div className="container d-flex align-items-center flex-column">
      <h2>{question}</h2>
      <div className="position-relative">
        <div className="video__overlay" onClick={getClickPosition} />
        <ReactPlayer
          url={videoUrl}
          onProgress={onProgress}
          volume="0"
          playing={playing}
          width={640}
          height={360}
        />
      </div>
      <div>
        <h4 className="video__breakdown">Breakdown of the situtation</h4>
        <p className="video__breakdown-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          facere animi quod excepturi deserunt ratione eos ipsa? Laudantium
          nobis eligendi sit libero possimus necessitatibus nulla, quam tenetur
          aliquid incidunt obcaecati voluptates ipsa, magni, praesentium minus
          iste quae dolorem aperiam. Sit, laborum enim commodi provident
          deleniti non iste iusto sed inventore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam facere animi quod excepturi
          deserunt ratione eos ipsa? Laudantium nobis eligendi sit libero
          possimus necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
          voluptates ipsa, magni, praesentium minus iste quae dolorem aperiam.
          Sit, laborum enim commodi provident deleniti non iste iusto sed
          inventore.
        </p>
        <p className="video__breakdown-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          facere animi quod excepturi deserunt ratione eos ipsa? Laudantium
          nobis eligendi sit libero possimus necessitatibus nulla, quam tenetur
          aliquid incidunt obcaecati voluptates ipsa, magni, praesentium minus
          iste quae dolorem aperiam. Sit, laborum enim commodi provident
          deleniti non iste iusto sed inventore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam facere animi quod excepturi
          deserunt ratione eos ipsa? Laudantium nobis eligendi sit libero
          possimus necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
          voluptates ipsa, magni, praesentium minus iste quae dolorem aperiam.
          Sit, laborum enim commodi provident deleniti non iste iusto sed
          inventore.
        </p>
        <h4 className="video__additional"> Additional information </h4>
        <p className="video__additional-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          facere animi quod excepturi deserunt ratione eos ipsa? Laudantium
          nobis eligendi sit libero possimus necessitatibus nulla, quam tenetur
          aliquid incidunt obcaecati voluptates ipsa, magni, praesentium minus
          iste quae dolorem aperiam. Sit, laborum enim commodi provident
          deleniti non iste iusto sed inventore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam facere animi quod excepturi
          deserunt ratione eos ipsa? Laudantium nobis eligendi sit libero
          possimus necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
          voluptates ipsa, magni, praesentium minus iste quae dolorem aperiam.
          Sit, laborum enim commodi provident deleniti non iste iusto sed
          inventore.
        </p>
        <p className="video__additional-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          facere animi quod excepturi deserunt ratione eos ipsa? Laudantium
          nobis eligendi sit libero possimus necessitatibus nulla, quam tenetur
          aliquid incidunt obcaecati voluptates ipsa, magni, praesentium minus
          iste quae dolorem aperiam. Sit, laborum enim commodi provident
          deleniti non iste iusto sed inventore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam facere animi quod excepturi
          deserunt ratione eos ipsa? Laudantium nobis eligendi sit libero
          possimus necessitatibus nulla, quam tenetur aliquid incidunt obcaecati
          voluptates ipsa, magni, praesentium minus iste quae dolorem aperiam.
          Sit, laborum enim commodi provident deleniti non iste iusto sed
          inventore.
        </p>
      </div>
    </div>
  </div>
);
