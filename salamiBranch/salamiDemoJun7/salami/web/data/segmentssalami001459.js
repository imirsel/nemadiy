var data = [
[{o: 0.255, f: 32.842, l: "A", a: 0},
{o: 32.842, f: 64.784, l: "A", a: 1},
{o: 64.784, f: 84.355, l: "D", a: 0},
{o: 84.355, f: 147.094, l: "A", a: 1},
{o: 147.094, f: 166.625, l: "D", a: 0},
{o: 166.625, f: 214.029, l: "A", a: 1},
{o: 214.029, f: 253.07, l: "G", a: 0},
{o: 253.07, f: 304.912, l: "G", a: 1}],
[{o: 0.236, f: 11.184, l: "A", a: 0},
{o: 11.184, f: 21.26, l: "A", a: 1},
{o: 21.26, f: 30.312, l: "A", a: 0},
{o: 30.312, f: 48.78, l: "A", a: 1},
{o: 48.78, f: 62.752, l: "A", a: 0},
{o: 62.752, f: 79.088, l: "A", a: 1},
{o: 79.088, f: 103.016, l: "A", a: 0},
{o: 103.016, f: 118.728, l: "A", a: 1},
{o: 118.728, f: 134.36, l: "A", a: 0},
{o: 134.36, f: 146.564, l: "A", a: 1},
{o: 146.564, f: 162.692, l: "A", a: 0},
{o: 162.692, f: 171.556, l: "A", a: 1},
{o: 171.556, f: 191.404, l: "A", a: 0},
{o: 191.404, f: 206.136, l: "B", a: 1},
{o: 206.136, f: 220.404, l: "B", a: 0},
{o: 220.404, f: 243.356, l: "C", a: 1},
{o: 243.356, f: 253.04, l: "D", a: 0},
{o: 253.04, f: 271.656, l: "A", a: 1},
{o: 271.656, f: 294.412, l: "E", a: 0},
{o: 294.412, f: 300.46, l: "F", a: 1}],
[{o: 0.236, f: 11.184, l: "A", a: 0},
{o: 11.184, f: 21.26, l: "A", a: 1},
{o: 21.26, f: 30.312, l: "E", a: 0},
{o: 30.312, f: 48.78, l: "F", a: 1},
{o: 48.78, f: 62.752, l: "G", a: 0},
{o: 62.752, f: 79.088, l: "C", a: 1},
{o: 79.088, f: 103.016, l: "D", a: 0},
{o: 103.016, f: 118.728, l: "C", a: 1},
{o: 118.728, f: 134.36, l: "C", a: 0},
{o: 134.36, f: 146.564, l: "C", a: 1},
{o: 146.564, f: 162.692, l: "C", a: 0},
{o: 162.692, f: 171.556, l: "D", a: 1},
{o: 171.556, f: 191.404, l: "C", a: 0},
{o: 191.404, f: 206.136, l: "B", a: 1},
{o: 206.136, f: 220.404, l: "B", a: 0},
{o: 220.404, f: 243.356, l: "H", a: 1},
{o: 243.356, f: 253.04, l: "I", a: 0},
{o: 253.04, f: 271.656, l: "J", a: 1},
{o: 271.656, f: 294.412, l: "K", a: 0},
{o: 294.412, f: 300.46, l: "L", a: 1}],
[{o: 0.6, f: 21.04, l: "1", a: 0},
{o: 21.04, f: 33.12, l: "3", a: 1},
{o: 33.12, f: 55.04, l: "1", a: 0},
{o: 55.04, f: 64, l: "3", a: 1},
{o: 64, f: 75.347, l: "4", a: 0},
{o: 75.347, f: 91.413, l: "2", a: 1},
{o: 91.413, f: 99.787, l: "1", a: 0},
{o: 99.787, f: 105.747, l: "8", a: 1},
{o: 105.747, f: 146.813, l: "1", a: 0},
{o: 146.813, f: 161.96, l: "4", a: 1},
{o: 161.96, f: 185.72, l: "1", a: 0},
{o: 185.72, f: 194.107, l: "3", a: 1},
{o: 194.107, f: 236.787, l: "2", a: 0},
{o: 236.787, f: 251.8, l: "5", a: 1},
{o: 251.8, f: 286.76, l: "2", a: 0},
{o: 286.76, f: 296.76, l: "6", a: 1},
{o: 296.76, f: 304.76, l: "7", a: 0}],
[{o: 0, f: 29.055, l: "a", a: 0},
{o: 29.055, f: 61.09, l: "a", a: 1},
{o: 61.09, f: 108.025, l: "b", a: 0},
{o: 108.025, f: 166.135, l: "c", a: 1},
{o: 166.135, f: 195.19, l: "a", a: 0},
{o: 195.19, f: 227.225, l: "a", a: 1},
{o: 227.225, f: 268.945, l: "b", a: 0},
{o: 268.945, f: 304.705, l: "d", a: 1}],
[{o: 0, f: 11.726, l: "n1", a: 0},
{o: 11.726, f: 27.829, l: "A", a: 1},
{o: 27.829, f: 43.886, l: "n2", a: 0},
{o: 43.886, f: 59.78, l: "A", a: 1},
{o: 59.78, f: 95.132, l: "C", a: 0},
{o: 95.132, f: 112.895, l: "A", a: 1},
{o: 112.895, f: 126.526, l: "B", a: 0},
{o: 126.526, f: 142.187, l: "A", a: 1},
{o: 142.187, f: 177.575, l: "C", a: 0},
{o: 177.575, f: 193.399, l: "A", a: 1},
{o: 193.399, f: 207.145, l: "n6", a: 0},
{o: 207.145, f: 222.877, l: "B", a: 1},
{o: 222.877, f: 236.588, l: "B", a: 0},
{o: 236.588, f: 250.16, l: "n8", a: 1},
{o: 250.16, f: 263.825, l: "B", a: 0},
{o: 263.825, f: 304.692, l: "n9", a: 1}],
[{o: 0, f: 0.112, l: "H", a: 0},
{o: 0.112, f: 60.5, l: "G", a: 1},
{o: 60.5, f: 113.6, l: "E", a: 0},
{o: 113.6, f: 125.772, l: "B", a: 1},
{o: 125.772, f: 169.056, l: "E", a: 0},
{o: 169.056, f: 194.116, l: "G", a: 1},
{o: 194.116, f: 298.432, l: "E", a: 0},
{o: 298.432, f: 304.85, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001459.ogg";