var data = [
[{o: 5.224, f: 135.001, l: "A", a: 0},
{o: 135.001, f: 158.498, l: "B", a: 1},
{o: 158.498, f: 170.002, l: "B'", a: 0},
{o: 170.002, f: 191.562, l: "B", a: 1},
{o: 191.562, f: 203.674, l: "C", a: 0},
{o: 203.674, f: 225.049, l: "B", a: 1},
{o: 225.049, f: 235.722, l: "C", a: 0},
{o: 235.722, f: 258.474, l: "D", a: 1},
{o: 258.474, f: 279.817, l: "B", a: 0},
{o: 279.817, f: 300.817, l: "B", a: 1},
{o: 300.817, f: 321.962, l: "B", a: 0},
{o: 321.962, f: 364.37, l: "C'", a: 1}],
[{o: 0.012, f: 8.4, l: "A", a: 0},
{o: 8.4, f: 23.2, l: "A", a: 1},
{o: 23.2, f: 31.144, l: "B", a: 0},
{o: 31.144, f: 42.98, l: "A", a: 1},
{o: 42.98, f: 66.884, l: "A", a: 0},
{o: 66.884, f: 84.852, l: "A", a: 1},
{o: 84.852, f: 104.192, l: "A", a: 0},
{o: 104.192, f: 122.856, l: "A", a: 1},
{o: 122.856, f: 131.312, l: "A", a: 0},
{o: 131.312, f: 148.288, l: "A", a: 1},
{o: 148.288, f: 167.812, l: "A", a: 0},
{o: 167.812, f: 191.792, l: "A", a: 1},
{o: 191.792, f: 202.224, l: "A", a: 0},
{o: 202.224, f: 227.768, l: "A", a: 1},
{o: 227.768, f: 244.656, l: "A", a: 0},
{o: 244.656, f: 260.376, l: "A", a: 1},
{o: 260.376, f: 272.736, l: "A", a: 0},
{o: 272.736, f: 282.736, l: "A", a: 1},
{o: 282.736, f: 293.216, l: "A", a: 0},
{o: 293.216, f: 302.06, l: "A", a: 1},
{o: 302.06, f: 322.896, l: "A", a: 0},
{o: 322.896, f: 335.908, l: "A", a: 1},
{o: 335.908, f: 346.388, l: "A", a: 0},
{o: 346.388, f: 354.436, l: "A", a: 1},
{o: 354.436, f: 364.188, l: "A", a: 0}],
[{o: 0.012, f: 8.4, l: "A", a: 0},
{o: 8.4, f: 23.2, l: "G", a: 1},
{o: 23.2, f: 31.144, l: "H", a: 0},
{o: 31.144, f: 42.98, l: "I", a: 1},
{o: 42.98, f: 66.884, l: "G", a: 0},
{o: 66.884, f: 84.852, l: "G", a: 1},
{o: 84.852, f: 104.192, l: "F", a: 0},
{o: 104.192, f: 122.856, l: "F", a: 1},
{o: 122.856, f: 131.312, l: "D", a: 0},
{o: 131.312, f: 148.288, l: "D", a: 1},
{o: 148.288, f: 167.812, l: "D", a: 0},
{o: 167.812, f: 191.792, l: "B", a: 1},
{o: 191.792, f: 202.224, l: "C", a: 0},
{o: 202.224, f: 227.768, l: "B", a: 1},
{o: 227.768, f: 244.656, l: "J", a: 0},
{o: 244.656, f: 260.376, l: "D", a: 1},
{o: 260.376, f: 272.736, l: "K", a: 0},
{o: 272.736, f: 282.736, l: "E", a: 1},
{o: 282.736, f: 293.216, l: "E", a: 0},
{o: 293.216, f: 302.06, l: "E", a: 1},
{o: 302.06, f: 322.896, l: "C", a: 0},
{o: 322.896, f: 335.908, l: "C", a: 1},
{o: 335.908, f: 346.388, l: "A", a: 0},
{o: 346.388, f: 354.436, l: "A", a: 1},
{o: 354.436, f: 364.188, l: "A", a: 0}],
[{o: 0.627, f: 4.987, l: "8", a: 0},
{o: 4.987, f: 18.52, l: "2", a: 1},
{o: 18.52, f: 44.347, l: "4", a: 0},
{o: 44.347, f: 81.733, l: "2", a: 1},
{o: 81.733, f: 168.253, l: "3", a: 0},
{o: 168.253, f: 235.347, l: "1", a: 1},
{o: 235.347, f: 246.48, l: "6", a: 0},
{o: 246.48, f: 257.347, l: "7", a: 1},
{o: 257.347, f: 280.053, l: "1", a: 0},
{o: 280.053, f: 298.32, l: "5", a: 1},
{o: 298.32, f: 364.147, l: "1", a: 0}],
[{o: 0, f: 74.5, l: "a", a: 0},
{o: 74.5, f: 111.005, l: "b", a: 1},
{o: 111.005, f: 140.805, l: "b", a: 0},
{o: 140.805, f: 175.82, l: "b", a: 1},
{o: 175.82, f: 212.325, l: "b", a: 0},
{o: 212.325, f: 242.125, l: "b", a: 1},
{o: 242.125, f: 272.67, l: "b", a: 0},
{o: 272.67, f: 293.53, l: "c", a: 1},
{o: 293.53, f: 330.035, l: "b", a: 0},
{o: 330.035, f: 359.835, l: "b", a: 1},
{o: 359.835, f: 400.81, l: "b", a: 0}],
[{o: 0, f: 12.446, l: "n1", a: 0},
{o: 12.446, f: 21.618, l: "B", a: 1},
{o: 21.618, f: 38.708, l: "n2", a: 0},
{o: 38.708, f: 47.52, l: "B", a: 1},
{o: 47.52, f: 75.604, l: "n3", a: 0},
{o: 75.604, f: 89.675, l: "B", a: 1},
{o: 89.675, f: 114.66, l: "C", a: 0},
{o: 114.66, f: 126.746, l: "n5", a: 1},
{o: 126.746, f: 147.876, l: "C", a: 0},
{o: 147.876, f: 169.97, l: "n6", a: 1},
{o: 169.97, f: 203.639, l: "A", a: 0},
{o: 203.639, f: 237.354, l: "A", a: 1},
{o: 237.354, f: 264.429, l: "n7", a: 0},
{o: 264.429, f: 277.444, l: "B", a: 1},
{o: 277.444, f: 286.708, l: "B", a: 0},
{o: 286.708, f: 300.745, l: "n9", a: 1},
{o: 300.745, f: 336.62, l: "A", a: 0},
{o: 336.62, f: 345.768, l: "D", a: 1},
{o: 345.768, f: 354.615, l: "n11", a: 0},
{o: 354.615, f: 364.135, l: "D", a: 1}],
[{o: 0, f: 0.012, l: "G", a: 0},
{o: 0.012, f: 5.468, l: "F", a: 1},
{o: 5.468, f: 168.864, l: "A", a: 0},
{o: 168.864, f: 232.824, l: "E", a: 1},
{o: 232.824, f: 256.656, l: "F", a: 0},
{o: 256.656, f: 275.752, l: "A", a: 1},
{o: 275.752, f: 316.92, l: "E", a: 0},
{o: 316.92, f: 355.736, l: "A", a: 1},
{o: 355.736, f: 364.188, l: "E", a: 0},
{o: 364.188, f: 364.267, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001458.ogg";

var artist = "Uncle Billys Smokehouse";

var track = "One Good Man ";
