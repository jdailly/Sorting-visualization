import React from 'react';
import {
  getQuickSortAnimation,
  getBubbleSortAnimation,
  getMergeSortAnimations,
  getSelectionSortAnimation, getInsertionSortAnimation
} from '../SortAlgo/SortAlgo';
import Button from 'react-bootstrap/Button';
// import ReactBootstrapSlider from 'react-bootstrap-slider';

import './Sorting.css';


let ANIMATION_SPEED_MS = 20;
let NUMBER_OF_ARRAY_BARS = 150;
const PRIMARY_COLOR = '#66FCF1';
const SECONDARY_COLOR = '#1F2833';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      set: NUMBER_OF_ARRAY_BARS,
      time: ANIMATION_SPEED_MS,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 400));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      console.log(animations[i]);
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    console.log("quickSort");
    const animations = getQuickSortAnimation(this.state.array);
    for (let i = 0; i < animations.length; i++) {

      const isColorChange = i % 2;

      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;


      if (isColorChange === 0) {
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

      }

      else {
        setTimeout(() => {
          const tempStyle = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempStyle;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS)

      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimation(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 2;
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if (isColorChange === 0) {
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

      }
      else {
        setTimeout(() => {
          const tempStyle = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempStyle;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS)

      }


    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimation(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 2;
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if (isColorChange === 0) {
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

      }
      else {
        setTimeout(() => {
          const tempStyle = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempStyle;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS)

      }


    }
  }


  selectionSort() {
    const animations = getSelectionSortAnimation(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 2;
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if (isColorChange === 0) {
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

      }
      else {
        setTimeout(() => {
          const tempStyle = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempStyle;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS)

      }


    }

  }

  testSortingAlgorithms() {
    for (let i = 0; i < 2; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getQuickSortAnimation(array.slice(), 0, array.length - 1);
      console.log(javaScriptSortedArray);
      console.log("quick sort");
      console.log(mergeSortedArray);
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  refresh() {
    window.location.reload();
  }

  setArrayBars(event) {
    console.log(event.target.value);
    this.setState({set: event.target.value});
    NUMBER_OF_ARRAY_BARS = event.target.value;
    this.resetArray();
  }

  setSortingSpeed(event) {

    this.setState({time: event.target.value});
    ANIMATION_SPEED_MS = event.target.value;

  }

  render() {
    const {array} = this.state;


    return (
      <div>

        <div className="blackHeader">
          <div className="row">
            <div className="col-3">
              <div className="somePaddingTop">
                <span className="somePadding"><button className="btn-head" onClick={() => this.resetArray()}>Generate New Array</button></span>
                <button className="btn-head" onClick={() => this.refresh()}>Restart</button>
              </div>
            </div>
            <div className="col-5">
              <div class=" row">
                <div className="somePaddingTop col-12">
                <span className="somePadding"> <button className="btn-head"
                                                       onClick={() => this.mergeSort()}>Merge Sort</button> </span>
                  <span className="somePadding"><button className="btn-head"
                                                        onClick={() => this.quickSort()}>Quick Sort</button> </span>
                  <span className="somePadding"><button className="btn-head"
                                                        onClick={() => this.bubbleSort()}>Bubble Sort</button></span>
                </div>
                <div class="col-12 pt-3">
                  <span className="somePadding"><button className="btn-head"
                                                        onClick={() => this.selectionSort()}> Selection Sort </button></span>
                  <span className="somePadding"><button className="btn-head"
                                                        onClick={() => this.insertionSort()}> Insertion Sort </button></span>
                </div>
              </div>
            </div>
            <div className="col-4 somePaddingTop alignLeft">

              <div>
                <label className="headLable"> Array Size </label>
                <input
                  className="slider"
                  id="typeinp"
                  type="range"
                  min="10" max="300"
                  value={this.state.set}
                  onChange={this.setArrayBars.bind(this)}
                  step="1"/>
              </div>

              <div>
                <label className="headLable"> Sorting Speed </label>
                <input
                  className="slider"
                  id="typeinp"
                  type="range"
                  min="1" max="1000"
                  value={this.state.time}
                  onChange={this.setSortingSpeed.bind(this)}
                  step="1"/>
                <label className="headLable paddingRight">{ANIMATION_SPEED_MS}</label>
              </div>


            </div>
          </div>
        </div>


        <div className="graph">

          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${Math.round((500 - NUMBER_OF_ARRAY_BARS) / NUMBER_OF_ARRAY_BARS)}px`,
              }}/>

          ))}

        </div>

        {/*<button onClick={() => this.testSortingAlgorithms()}>*/}
        {/*Test Sorting Algorithms (BROKEN)*/}
        {/*</button>*/}
        <div>
        </div>
      </div>

    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

