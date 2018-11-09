function buildGauge(input){


    // Enter a speed between 0 and 180
var level = input;

// SCALELINEAR or scale bar 

// Trig to calc meter point
var degrees = 180-level*20,
     radius = .5;
var radians = degrees * Math.PI / 180;
var x = radius * Math.cos(radians);
var y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
var mainPath = `M -.0 -0.025 L .0 0.025 L `,
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ` Z`;
var path = mainPath.concat(pathX,space,pathY,pathEnd);

var data = [{ type: `category`,
   x: [0], y:[0],
    marker: {size: 28, color:'850000'},
    showlegend: false,
    name: 'frequency',
    text: level},
    // hoverinfo: `text+name`},
  { values: [9/8,9/8,9/8,9/8,9/8,9/8,9/8,9/8,9/8,9],
  rotation: 95,
  text: ['8-9', '7-8', '6-7', '5-6',
            '4-5', '3-4','2-3','1-2','0-1', ''],
  textinfo: 'text',
  textposition:'inside',
  marker: {colors:['rgba(32, 0, 128, .5)', 'rgba(0, 32, 128, .5)',
                         'rgba(0, 96, 128, .5)', 'rgba(0, 128, 96, .5)',
                         'rgba(0, 128, 32, .5)', 'rgba(32, 128, 0, .5)',
                         'rgba(96, 128, 0, .5)', 'rgba(128, 96, 0, .5)','rgba(128, 32, 0, .5)', 'rgba(255, 255, 255, 0)']},
//   labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
//   hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
}];

var layout = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: `Belly Button Washing Frequency`,
  height: 500,
  width: 500,
  xaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]}
  };

Plotly.newPlot('gauge', data, layout);

};

