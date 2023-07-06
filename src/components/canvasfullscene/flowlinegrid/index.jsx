import { useEffect } from "react";
import styles from "./styles.module.scss";
import { init } from "./script";
export default function Flowlinegrid(){

  useEffect(()=>{
    init()
  },[])

  return <canvas id="canvas1"></canvas>
}