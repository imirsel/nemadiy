var data = [
[{o: 0.395, f: 23.339, l: "A'", a: 0},
{o: 23.339, f: 35.452, l: "A", a: 1},
{o: 35.452, f: 47.475, l: "A", a: 0},
{o: 47.475, f: 59.571, l: "A", a: 1},
{o: 59.571, f: 71.663, l: "A", a: 0},
{o: 71.663, f: 83.76, l: "A", a: 1},
{o: 83.76, f: 95.849, l: "B", a: 0},
{o: 95.849, f: 107.991, l: "A", a: 1},
{o: 107.991, f: 120.055, l: "A", a: 0},
{o: 120.055, f: 132.127, l: "B", a: 1},
{o: 132.127, f: 144.235, l: "A", a: 0},
{o: 144.235, f: 162.173, l: "A", a: 1}],
[{o: 0.192, f: 11.18, l: "B", a: 0},
{o: 11.18, f: 22.528, l: "B", a: 1},
{o: 22.528, f: 39.52, l: "B", a: 0},
{o: 39.52, f: 57.596, l: "B", a: 1},
{o: 57.596, f: 72.332, l: "B", a: 0},
{o: 72.332, f: 79.476, l: "B", a: 1},
{o: 79.476, f: 92.724, l: "B", a: 0},
{o: 92.724, f: 106.816, l: "B", a: 1},
{o: 106.816, f: 118.068, l: "B", a: 0},
{o: 118.068, f: 130.14, l: "B", a: 1},
{o: 130.14, f: 144.48, l: "B", a: 0},
{o: 144.48, f: 155.376, l: "A", a: 1},
{o: 155.376, f: 161.02, l: "C", a: 0}],
[{o: 0.192, f: 11.18, l: "B", a: 0},
{o: 11.18, f: 22.528, l: "E", a: 1},
{o: 22.528, f: 39.52, l: "C", a: 0},
{o: 39.52, f: 57.596, l: "D", a: 1},
{o: 57.596, f: 72.332, l: "D", a: 0},
{o: 72.332, f: 79.476, l: "C", a: 1},
{o: 79.476, f: 92.724, l: "D", a: 0},
{o: 92.724, f: 106.816, l: "A", a: 1},
{o: 106.816, f: 118.068, l: "D", a: 0},
{o: 118.068, f: 130.14, l: "D", a: 1},
{o: 130.14, f: 144.48, l: "A", a: 0},
{o: 144.48, f: 155.376, l: "F", a: 1},
{o: 155.376, f: 161.02, l: "G", a: 0}],
[{o: 0.76, f: 2.667, l: "8", a: 0},
{o: 2.667, f: 22.56, l: "5", a: 1},
{o: 22.56, f: 45.147, l: "4", a: 0},
{o: 45.147, f: 69.32, l: "3", a: 1},
{o: 69.32, f: 79.88, l: "6", a: 0},
{o: 79.88, f: 95.053, l: "2", a: 1},
{o: 95.053, f: 119.213, l: "1", a: 0},
{o: 119.213, f: 129.04, l: "2", a: 1},
{o: 129.04, f: 153.107, l: "1", a: 0},
{o: 153.107, f: 161, l: "7", a: 1}],
[{o: 0, f: 24.585, l: "a", a: 0},
{o: 24.585, f: 33.525, l: "b", a: 1},
{o: 33.525, f: 61.835, l: "c", a: 0},
{o: 61.835, f: 73.01, l: "d", a: 1},
{o: 73.01, f: 81.95, l: "b", a: 0},
{o: 81.95, f: 99.085, l: "e", a: 1},
{o: 99.085, f: 110.26, l: "d", a: 0},
{o: 110.26, f: 119.2, l: "b", a: 1},
{o: 119.2, f: 135.59, l: "e", a: 0},
{o: 135.59, f: 161.665, l: "f", a: 1}],
[{o: 0, f: 22.941, l: "n1", a: 0},
{o: 22.941, f: 35.051, l: "A", a: 1},
{o: 35.051, f: 45.581, l: "A", a: 0},
{o: 45.581, f: 59.164, l: "n3", a: 1},
{o: 59.164, f: 69.706, l: "A", a: 0},
{o: 69.706, f: 82.953, l: "n4", a: 1},
{o: 82.953, f: 95.446, l: "B", a: 0},
{o: 95.446, f: 107.59, l: "A", a: 1},
{o: 107.59, f: 119.269, l: "A", a: 0},
{o: 119.269, f: 131.715, l: "B", a: 1},
{o: 131.715, f: 143.755, l: "A", a: 0},
{o: 143.755, f: 154.273, l: "A", a: 1},
{o: 154.273, f: 162.029, l: "n10", a: 0}],
[{o: 0, f: 0.192, l: "F", a: 0},
{o: 0.192, f: 27.08, l: "E", a: 1},
{o: 27.08, f: 77.976, l: "A", a: 0},
{o: 77.976, f: 98.084, l: "C", a: 1},
{o: 98.084, f: 115.044, l: "A", a: 0},
{o: 115.044, f: 143.356, l: "C", a: 1},
{o: 143.356, f: 159.892, l: "D", a: 0},
{o: 159.892, f: 161.02, l: "A", a: 1},
{o: 161.02, f: 162.169, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000735.ogg";

var artist = "Dion";

var track = "Runaround Sue";
