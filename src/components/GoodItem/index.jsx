import React from "react";
import cls from "./GoodItem.module.scss";
function GoodItem({
  abv,
  boil_value,
  description,
  id,
  image_url,
  name,
  volume: { unit, value },
}) {
  return <div onClick={() => console.log(id) } className={cls.root}>
  <div className={cls.card}>
  <div className={cls.cardHead}>
  <img src={image_url} alt={name} className={cls.image} 
/>
  </div>
</div>
    <div className={cls.cardBody}>
      <div className={cls.name}> Name: {name}</div>
      <div className={cls.description}>Description:{description}</div>
      <div className={cls.volume}>Volume:{value}{unit}</div>
      <div className={cls.abv}>Alcohol by Volume: {abv}</div>
    </div>
  </div>;
}

export default GoodItem;
