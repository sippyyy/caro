import './app.css';
import {useState,useContext,useCallback, useEffect} from 'react'
import { Context } from './context/context';
import Form from './form';


const blank = [
  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  {
    class: 'x y zero blank',
  },
  {
    class: '1x 1y 1 blank',
  },
  {
    class: '2x 2y 2 blank',
  },
  {
    class: '3x 3y 3 blank',
  },
  {
    class: '4x 4y 4 blank',
  },
  {
    class: '5x 5y 5 blank',
  },
  {
    class: '6x 6y 6 blank',
  },
  {
    class: '7x 7y 7 blank',
  },
  {
    class: '8x 8y 8 blank',
  },
  {
    class: '9x 9y 9 blank',
  },
  {
    class: '10x 10y 10 blank',
  },
  {
    class: '11x 11y 11 blank',
  },
  {
    class: '12x 12y 12 blank',
  },
  {
    class: '13x 13y 13 blank',
  },
  {
    class: '14x 14y 14 blank',
  },
  {
    class: '15x 15y 15 blank',
  },
  {
    class: '16x 16y 16 blank',
  },
  {
    class: '17x 17y 17 blank',
  },
  {
    class: '18x 18y 18 blank',
  },
  {
    class: '19x 19y 19 blank',
  },
  {
    class: '20x 20y 20 blank',
  },
  {
    class: '21x 21y 21 blank',
  },
  {
    class: '22x 22y 22 blank',
  },
  {
    class: '23x 23y 23 blank',
  },
  {
    class: '24x 24y 24 blank',
  },  {
    class: '25x 25y 25 blank',
  },
  {
    class: '26x 26y 26 blank',
  },
  {
    class: '27x 27y 27 blank',
  },
  {
    class: '28x 28y 28 blank',
  },  {
    class: '29x 29y 29 blank',
  },

  

]


function App() {
  const [chosenA,setChosenA] = useState([])
  const [chosenB,setChosenB] = useState([])
  const [turn,setTurn] = useState(1)
  const [state,dispatch] = useContext(Context)
  const [time,setTime] = useState(1200)
  const [timeLeft,setTimeLeft] = useState(1200)
  const [result,setResult] = useState(null)
  const [timePlay,setTimePlay] = useState(0)

  useEffect(()=>{
    if(state.user1){
      const timerId = setInterval(()=>{
        setTime(pre=>{
          if(pre> 0){
            return pre-1
          }else if(pre === 0 ){
            clearInterval(timerId)
          }
        })
      },1000)
      return ()=> clearInterval(timerId)
    }
  },[state.user1])

  useEffect(()=>{
    setTimeLeft(time)
  },[time])






  const handleChoose = (e)=>{

    if(e.target.innerText === '' && result === null){
      if(turn === 1 && e.target.innerText !== 'X'){
        e.target.innerText= 'X'
        const nIndex = +e.target.getAttribute('index')
        setChosenA(pre =>[...pre,nIndex].sort((a,b)=>a-b))
        setTurn(2)
        }if(turn === 2 && e.target.innerText !== 'O'){
        e.target.innerText= 'O'
        const nIndex = +e.target.getAttribute('index')
        setChosenB(pre =>[...pre,nIndex].sort((a,b)=>a-b))
        setTurn(1)
      }
    }
    else{
    }
    }

    useEffect(()=>{
      for( let i = 0; i< chosenA.length; i++){

        // landscape
        if(+chosenA[i]+1 === chosenA[i+1] 
          && +chosenA[i+1]+1 === +chosenA[i+2]
          && +chosenA[i+2]+1 === +chosenA[i+3]
          && +chosenA[i+3]+1 === +chosenA[i+4]){

            if(chosenB.indexOf(chosenA[i]-1)!== -1){
              if( chosenB.indexOf(chosenA[i+4]+ 1) !== -1){
                console.log('chua thang 1')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
            }

            if(chosenB.indexOf(chosenA[i+4]+ 1) !== -1){
              if(chosenB.indexOf(chosenA[i]-1) !== -1){
                console.log('chua thang')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
            }
            if(chosenB.indexOf(chosenA[i]-1 === -1) && chosenB.indexOf(chosenA[i+4]+ 1) === -1){
              setResult(state.user1)
              setTimePlay(1200 - timeLeft)
            }

            
          }

          // vertical
        if(+chosenA[i+1] - +chosenA[i] === 30
          && +chosenA[i+2] - +chosenA[i+1] === 30
          && +chosenA[i+3] - +chosenA[i+2] === 30
          && +chosenA[i+4] - +chosenA[i+3] === 30)
          {

            if(chosenB.indexOf(chosenA[i]-30)!== -1){
              if( chosenB.indexOf(chosenA[i+4]+ 30) !== -1){
                console.log('chua thang 1')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
            }

            if(chosenB.indexOf(chosenA[i+4]+ 30) !== -1){
              if(chosenB.indexOf(chosenA[i]-30) !== -1){
                console.log('chua thang')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
              break;
            }
            if(chosenB.indexOf(chosenA[i]-30 === -1) && chosenB.indexOf(chosenA[i+4]+ 30) === -1){
              setResult(state.user1)
              setTimePlay(1200 - timeLeft)
              break;
            }
      }
  
        // slash to left up
        if(+chosenA[i+1] - +chosenA[i] === 31
          && +chosenA[i+2] - +chosenA[i+1] === 31
          && +chosenA[i+3] - +chosenA[i+2] === 31
          && +chosenA[i+4] - +chosenA[i+3] === 31){

            if(chosenB.indexOf(chosenA[i]-31)!== -1){
              if( chosenB.indexOf(chosenA[i+4]+ 31) !== -1){
                console.log('chua thang 1')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
            }

            if(chosenB.indexOf(chosenA[i+4]+ 31) !== -1){
              if(chosenB.indexOf(chosenA[i]-31) !== -1){
                console.log('chua thang')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
              break;
            }
            if(chosenB.indexOf(chosenA[i]-31 === -1) && chosenB.indexOf(chosenA[i+4]+ 31) === -1){
              setResult(state.user1)
              setTimePlay(1200 - timeLeft)
              break;
            }

        }


        // slash to right up
        if(+chosenA[i+1] - +chosenA[i] === 29
          && +chosenA[i+2] - +chosenA[i+1] === 29
          && +chosenA[i+3] - +chosenA[i+2] === 29
          && +chosenA[i+4] - +chosenA[i+3] === 29){
            if(chosenB.indexOf(chosenA[i]-29)!== -1){
              if( chosenB.indexOf(chosenA[i+4]+ 29) !== -1){
                console.log('chua thang 1')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
            }

            if(chosenB.indexOf(chosenA[i+4]+ 29) !== -1){
              if(chosenB.indexOf(chosenA[i]-29) !== -1){
                console.log('chua thang')
              }else{
                setResult(state.user1)
                setTimePlay(1200 - timeLeft)
              }
            }
            if(chosenB.indexOf(chosenA[i]-29 === -1) && chosenB.indexOf(chosenA[i+4]+ 29) === -1){
              setResult(state.user1)
              setTimePlay(1200 - timeLeft)
            }

        }
      }

            // Chosen B

      for( let i = 0; i< chosenB.length; i++){

        // Landscape
          if(+chosenB[i]+1 === chosenB[i+1] 
            && +chosenB[i+1]+1 === +chosenB[i+2]
            && +chosenB[i+2]+1 === +chosenB[i+3]
            && +chosenB[i+3]+1 === +chosenB[i+4])
            {

              if(chosenA.indexOf(chosenB[i]-1)!== -1){
                if( chosenA.indexOf(chosenB[i+4]+ 1) !== -1){
                  console.log('chua thang 1')
                }else{
                  setResult(state.user2)
                   setTimePlay(1200 - timeLeft)
                }
                break;
              }
  
              if(chosenA.indexOf(chosenB[i+4]+ 1) !== -1){
                if(chosenA.indexOf(chosenB[i]-1) !== -1){
                  console.log('chua thang')
                }else{
                  setResult(state.user2)
                   setTimePlay(1200 - timeLeft)
                }
                break;
              }
              if(chosenA.indexOf(chosenB[i]-1 === -1) && chosenA.indexOf(chosenB[i+4]+ 1) === -1){
                setResult(state.user2)
                setTimePlay(1200 - timeLeft)
                break;
              }
  


            }

            // Vertical
          if(+chosenB[i+1] - +chosenB[i] === 30
            && +chosenB[i+2] - +chosenB[i+1] === 30
            && +chosenB[i+3] - +chosenB[i+2] === 30
            && +chosenB[i+4] - +chosenB[i+3] === 30)
            {

              if(chosenA.indexOf(chosenB[i]-30)!== -1){
                if( chosenA.indexOf(chosenB[i+4]+ 30) !== -1){
                  console.log('chua thang 1')
                }else{
                  setResult(state.user2)
                  setTimePlay(1200 - timeLeft)
                }
              }
  
              if(chosenA.indexOf(chosenB[i+4]+ 30) !== -1){
                if(chosenA.indexOf(chosenB[i]-30) !== -1){
                  console.log('chua thang')
                }else{
                  setResult(state.user2)
                  setTimePlay(1200 - timeLeft)
                }
              }
              if(chosenA.indexOf(chosenB[i]-30 === -1) && chosenA.indexOf(chosenB[i+4]+ 30) === -1){
                setResult(state.user2)
                 setTimePlay(1200 - timeLeft)
              }


          }

          // Slash to left up
    
          if(+chosenB[i+1] - +chosenB[i] === 31
            && +chosenB[i+2] - +chosenB[i+1] === 31
            && +chosenB[i+3] - +chosenB[i+2] === 31
            && +chosenB[i+4] - +chosenB[i+3] === 31)
            {

              if(chosenA.indexOf(chosenB[i]-31)!== -1){
                if( chosenA.indexOf(chosenB[i+4]+ 31) !== -1){
                  console.log('chua thang 1')
                }else{
                  setResult(state.user2)
                  setTimePlay(1200 - timeLeft)
                }
                break;
              }
  
              if(chosenA.indexOf(chosenB[i+4]+ 31) !== -1){
                if(chosenA.indexOf(chosenB[i]-31) !== -1){
                  console.log('chua thang')
                }else{
                  setResult(state.user2)
                  setTimePlay(1200 - timeLeft)
                }
                break;
              }
              if(chosenA.indexOf(chosenB[i]-31 === -1) && chosenA.indexOf(chosenB[i+4]+ 31) === -1){
                setResult(state.user2)
                 setTimePlay(1200 - timeLeft)
                break;
              }



          }
          
          //  Slash to right up
          if(chosenA.indexOf(chosenB[i]-29  === -1)
            &&+chosenB[i+1] - +chosenB[i] === 29
            && +chosenB[i+2] - +chosenB[i+1] === 29
            && +chosenB[i+3] - +chosenB[i+2] === 29
            && +chosenB[i+4] - +chosenB[i+3] === 29
            && chosenA.indexOf(chosenB[i+4]+29) === -1){

              if(chosenA.indexOf(chosenB[i]-29)!== -1){
                if( chosenA.indexOf(chosenB[i+4]+ 29) !== -1){
                  console.log('chua thang 1')
                }else{
                  setResult(state.user2)
                  setTimePlay(1200 - timeLeft)
                }
              }
  
              if(chosenA.indexOf(chosenB[i+4]+ 29) !== -1){
                if(chosenA.indexOf(chosenB[i]-29) !== -1){
                  console.log('chua thang')
                }else{
                  setResult(state.user2)
                  setTimePlay(1200 - timeLeft)
                }
              }
              if(chosenA.indexOf(chosenB[i]-29 === -1) && chosenA.indexOf(chosenB[i+4]+ 29) === -1){
                setResult(state.user2)
                 setTimePlay(1200 - timeLeft)
              }



          }
      }
    },[chosenA,chosenB])


  return (
    <div className="app">
      <Form ></Form>
      <div className="content">
        <span className="time">{timePlay ? `${result} win within ${timePlay} seconds` : `${timeLeft} Seconds Left`}</span>
        <div className="users">
          <div className="userBlock">
            <p className="key">User 1: </p>
            <p className="value">{state.user1}</p>
          </div>
          <div className="userBlock">
            <p className="key">User 2: </p>
            <p className="value">{state.user2}</p>
          </div>
        </div>

        <p className='result'> result: {result ? `${result} win` : 'playing...'} </p>
      </div>
      <div className="board-game">
        {blank.map((element,index)=>(
          <div
          onClick={(e)=>{handleChoose(e)}} 
          index={index}
          className={element.class} key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
