import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

const ShowArticle = () => {
  return (
    <div className="w-1069">
      <Typography style="h1">Setting up an account in Scribble</Typography>
      <div className="flex mt-4">
        <div className="text-blue-800 bg-blue-100 px-2 rounded-lg">
          <Typography style="body2">Getting Started</Typography>
        </div>

        <Typography style="body2" className="ml-4">
          22 October, 2021
        </Typography>
      </div>
      <div className="mt-4">
        <Typography style="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          finibus justo et nunc posuere, id eleifend tortor dictum. Duis
          sagittis, ipsum sed ultricies blandit, tortor lacus fringilla ipsum,
          non iaculis justo massa tincidunt augue. Nam ac elit augue. Phasellus
          ac scelerisque odio. Donec tempus tortor sit amet enim tempus, eget
          pellentesque odio cursus. Sed porta finibus ante in malesuada. Nam vel
          massa condimentum metus dapibus eleifend. Quisque gravida id risus
          quis interdum. Cras rutrum ac neque sit amet hendrerit. Aenean
          volutpat accumsan volutpat. Aliquam erat volutpat. Maecenas congue, mi
          at consectetur vehicula, quam orci sollicitudin diam, ac ornare urna
          dui vel metus. Aenean rhoncus felis et massa aliquam pellentesque.
          Donec dictum laoreet justo. Morbi rutrum fringilla ante, ac efficitur
          orci. Quisque risus ipsum, hendrerit sit amet enim non, lobortis
          ultrices enim. Donec commodo tempor tellus a commodo. Integer mollis
          enim in iaculis sodales. Vivamus placerat dui nec elit sodales
          fermentum. Vivamus venenatis aliquet arcu, id posuere diam
          pellentesque non. In commodo faucibus velit ut rhoncus. Mauris cursus
          volutpat diam, sit amet accumsan ante
        </Typography>
      </div>
    </div>
  );
};

export default ShowArticle;
