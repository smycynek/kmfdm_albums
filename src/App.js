/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import html2canvas from 'html2canvas';
import download from 'downloadjs';

import {
  BrowserView,
} from 'react-device-detect';

import './styles/scss/layout.scss';
import alphabet from './alphabet.json';
import imageComponents from './images/scaledImageComponents';

const App = () => {
  const red = '#8B0000';
  const gold = '#FFD700';
  const orange = '#FF8C00';
  const green = '#006400';
  const teal = '#008080';
  const purple = '#483D8B';
  const silver = '#C0C0C0';
  const white = '#ffffff';
  const black = '#000000';
  const randomColors = [red, gold, orange, green, teal, purple];

  const [customWord, setCustomWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [color, setColor] = useState(red);
  const [textColor, setTextColor] = useState(gold);

  const randomRange = (length) => Math.floor(Math.random() * Math.floor(length));

  const newWordIndex = () => {
    setWordIndex(randomRange(alphabet.length));
  };
  const newImageIndex = () => {
    setImageIndex(randomRange(imageComponents.length));
  };

  const onChangeCustomWord = (e) => {
    if (e.target.value.length < 11) {
      setCustomWord(e.target.value);
      alphabet[0] = e.target.value;
      setWordIndex(0);
    }
    if (e.target.value.length === 0) {
      newWordIndex();
    }
  };

  const saveImage = () => {
    html2canvas(document.getElementById('main')).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      download(image, `download_${alphabet[wordIndex]}_${imageIndex}.png`);
    });
  };

  useEffect(() => {
    setImageIndex(randomRange(imageComponents.length));
    setWordIndex(randomRange(alphabet.length));
    setColor(randomColors[randomRange(randomColors.length)]);
    setTextColor(randomColors[randomRange(randomColors.length)]);
  }, []);

  const MyImage = imageComponents[imageIndex];

  return (
    <>
      <div className="MainApp">
        <h1 className="Banner">
          KMFDM album generator
        </h1>
        <p>
          <strong>Click</strong>
          {' '}
          the album
          {' '}
          <strong>image</strong>
          {' '}
          or lower title
          {' '}
          <strong>text</strong>
          {' '}
          for more.
        </p>

        <div>
          <div id="main" className="OuterBox">
            <h1 className="Main">KMFDM</h1>

            <MyImage
              style={{ backgroundColor: color, margin: '.5em' }}
              id="theImage"
              onClick={newImageIndex}
              fillColor={white}
            />

            <h1 onClick={newWordIndex} style={{ color: textColor }} className="Title">
              {alphabet[wordIndex].toUpperCase()}
            </h1>
          </div>

        </div>
        <div className="Controls">
          <span><strong>Image</strong></span>
          <div className="ButtonWrapper">
            <button
              type="button"
              onClick={() => setColor(red)}
              className="ColorChoice red"
            />
            <button
              type="button"
              onClick={() => setColor(gold)}
              className="ColorChoice gold"
            />
            <button
              type="button"
              onClick={() => setColor(orange)}
              className="ColorChoice orange"
            />
            <button
              type="button"
              onClick={() => setColor(green)}
              className="ColorChoice green"
            />
            <button
              type="button"
              onClick={() => setColor(teal)}
              className="ColorChoice teal"
            />
            <button
              type="button"
              onClick={() => setColor(purple)}
              className="ColorChoice purple"
            />
            <button
              type="button"
              onClick={() => setColor(silver)}
              className="ColorChoice silver"
            />
            <button
              type="button"
              onClick={() => setColor(black)}
              className="ColorChoice black"
            />
          </div>
          <span><strong>Text</strong></span>
          <div className="ButtonWrapper">
            <button
              type="button"
              onClick={() => setTextColor(red)}
              className="ColorChoice red"
            />
            <button
              type="button"
              onClick={() => setTextColor(gold)}
              className="ColorChoice gold"
            />
            <button
              type="button"
              onClick={() => setTextColor(orange)}
              className="ColorChoice orange"
            />
            <button
              type="button"
              onClick={() => setTextColor(green)}
              className="ColorChoice green"
            />
            <button
              type="button"
              onClick={() => setTextColor(teal)}
              className="ColorChoice teal"
            />
            <button
              type="button"
              onClick={() => setTextColor(purple)}
              className="ColorChoice purple"
            />
            <button
              type="button"
              onClick={() => setTextColor(silver)}
              className="ColorChoice silver"
            />
            <button
              type="button"
              onClick={() => setTextColor(white)}
              className="ColorChoice white"
            />

          </div>
          <span><strong>Custom</strong></span>
          <div>
              <input value={alphabet[0]} onChange={onChangeCustomWord} />
            </div>
        </div>
        <p>
          As many people know, the greatest band to ever live, is, of course,
          {' '}
          {' '}
          <a href="https://kmfdm.net/">KMFDM</a>
          .  If you know KFMDM, you know their albums have a very specific
          style -- so, have some fun creating your own!
        </p>
        <BrowserView>
          <button
            type="button"
            className="blackStyle"
            onClick={saveImage}
          >
            DOWNLOAD
          </button>
        </BrowserView>
        <hr />


        <cite>
          <p>
          <a href="https://github.com/smycynek/kmfdm_albums">
          https://github.com/smycynek/kmfdm_albums
          </a>
          </p>
          <p>

          Icons made by
          {' '}
          <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>
          {' '}
          from
          {' '}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </p>
        </cite>
      </div>
    </>
  );
};

export default App;
