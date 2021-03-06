var data = [
[{o: 0.29, f: 33.208, l: "A", a: 0},
{o: 33.208, f: 46.433, l: "B", a: 1},
{o: 46.433, f: 65.638, l: "A", a: 0},
{o: 65.638, f: 86.792, l: "B", a: 1},
{o: 86.792, f: 117.195, l: "A", a: 0}],
[{o: 0.004, f: 6.424, l: "C", a: 0},
{o: 6.424, f: 18.228, l: "C", a: 1},
{o: 18.228, f: 27.268, l: "C", a: 0},
{o: 27.268, f: 32.392, l: "C", a: 1},
{o: 32.392, f: 39.004, l: "C", a: 0},
{o: 39.004, f: 49.388, l: "C", a: 1},
{o: 49.388, f: 55.8, l: "C", a: 0},
{o: 55.8, f: 64.588, l: "C", a: 1},
{o: 64.588, f: 78.16, l: "C", a: 0},
{o: 78.16, f: 86.796, l: "C", a: 1},
{o: 86.796, f: 91.656, l: "A", a: 0},
{o: 91.656, f: 102.576, l: "C", a: 1},
{o: 102.576, f: 107.664, l: "B", a: 0},
{o: 107.664, f: 114.692, l: "D", a: 1}],
[{o: 0.004, f: 6.424, l: "D", a: 0},
{o: 6.424, f: 18.228, l: "C", a: 1},
{o: 18.228, f: 27.268, l: "B", a: 0},
{o: 27.268, f: 32.392, l: "E", a: 1},
{o: 32.392, f: 39.004, l: "C", a: 0},
{o: 39.004, f: 49.388, l: "C", a: 1},
{o: 49.388, f: 55.8, l: "B", a: 0},
{o: 55.8, f: 64.588, l: "B", a: 1},
{o: 64.588, f: 78.16, l: "A", a: 0},
{o: 78.16, f: 86.796, l: "A", a: 1},
{o: 86.796, f: 91.656, l: "F", a: 0},
{o: 91.656, f: 102.576, l: "A", a: 1},
{o: 102.576, f: 107.664, l: "G", a: 0},
{o: 107.664, f: 114.692, l: "H", a: 1}],
[{o: 0.813, f: 6.707, l: "7", a: 0},
{o: 6.707, f: 19.013, l: "1", a: 1},
{o: 19.013, f: 25.52, l: "2", a: 0},
{o: 25.52, f: 36.267, l: "4", a: 1},
{o: 36.267, f: 55.053, l: "3", a: 0},
{o: 55.053, f: 66.32, l: "2", a: 1},
{o: 66.32, f: 86.547, l: "1", a: 0},
{o: 86.547, f: 94.467, l: "5", a: 1},
{o: 94.467, f: 104.947, l: "1", a: 0},
{o: 104.947, f: 112.373, l: "6", a: 1},
{o: 112.373, f: 117.08, l: "8", a: 0}],
[{o: 0, f: 7.45, l: "a", a: 0},
{o: 7.45, f: 14.9, l: "b", a: 1},
{o: 14.9, f: 25.33, l: "c", a: 0},
{o: 25.33, f: 33.525, l: "b", a: 1},
{o: 33.525, f: 62.58, l: "d", a: 0},
{o: 62.58, f: 75.245, l: "e", a: 1},
{o: 75.245, f: 87.91, l: "e", a: 0},
{o: 87.91, f: 93.87, l: "f", a: 1},
{o: 93.87, f: 103.555, l: "b", a: 0},
{o: 103.555, f: 116.22, l: "g", a: 1}],
[{o: 0, f: 117.052, l: "A", a: 0},
{o: 0.023, f: 117.075, l: "A", a: 1}],
[{o: 0, f: 0.02, l: "J", a: 0},
{o: 0.02, f: 22.74, l: "I", a: 1},
{o: 22.74, f: 34.688, l: "C", a: 0},
{o: 34.688, f: 49.88, l: "F", a: 1},
{o: 49.88, f: 58.204, l: "H", a: 0},
{o: 58.204, f: 77.876, l: "C", a: 1},
{o: 77.876, f: 98.808, l: "D", a: 0},
{o: 98.808, f: 113.648, l: "B", a: 1},
{o: 113.648, f: 117.186, l: "J", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001549.ogg";

var artist = "Puirt A Baroque";

var track = "Macklean Sonata I Allegro";
