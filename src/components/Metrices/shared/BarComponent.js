import { Typography } from "@mui/material";
import { localTheme } from "../../../localTheme/localTheme";

export default function BarComoponent({ heigth, current, day }) {
  return (
    <>
      <div
        style={{
          width: 10,
          //   backgroundColor: "blue",
          height: 100,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: 10,
            backgroundColor: current ? localTheme.buttonBG : localTheme.timeBG,
            height: heigth,
            borderRadius: 10,
            display: "inline-block",
            marginTop: 100 - heigth,
          }}
        />
      </div>
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: current ? localTheme.buttonBG : localTheme.timeBG,
          marginTop: 5,
          alignSelf: "flex-end",
        }}
      />
      <Typography
        variant="caption"
        fontSize={10}
        color={"text.secondary"}
        textTransform="uppercase"
      >
        {day}
      </Typography>
    </>
  );
}
