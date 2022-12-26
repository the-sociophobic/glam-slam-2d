import { X_DIMENSION, Y_DIMENSION } from './consts'


const getStylePos = (x: number, y: number) => ({
  left: `${100 / (X_DIMENSION) * (x)}%`,
  top: `${100 / (Y_DIMENSION + 1) * (y + 1)}%`,
})


export default getStylePos