var data = [
[{o: 0.408, f: 18.561, l: "A", a: 0},
{o: 18.561, f: 36.402, l: "A", a: 1},
{o: 36.402, f: 54.161, l: "B", a: 0},
{o: 54.161, f: 71.94, l: "C", a: 1},
{o: 71.94, f: 87.512, l: "C", a: 0},
{o: 87.512, f: 105.233, l: "A", a: 1},
{o: 105.233, f: 125.256, l: "A'", a: 0},
{o: 125.256, f: 134.145, l: "B'", a: 1},
{o: 134.145, f: 149.731, l: "C", a: 0},
{o: 149.731, f: 167.492, l: "C'", a: 1},
{o: 167.492, f: 195.411, l: "C'", a: 0}],
[{o: 0.224, f: 7.936, l: "A", a: 0},
{o: 7.936, f: 16.34, l: "D", a: 1},
{o: 16.34, f: 28.544, l: "E", a: 0},
{o: 28.544, f: 35.752, l: "E", a: 1},
{o: 35.752, f: 47.972, l: "E", a: 0},
{o: 47.972, f: 54.068, l: "E", a: 1},
{o: 54.068, f: 70.212, l: "F", a: 0},
{o: 70.212, f: 87.42, l: "E", a: 1},
{o: 87.42, f: 97.432, l: "E", a: 0},
{o: 97.432, f: 106.864, l: "E", a: 1},
{o: 106.864, f: 114.64, l: "C", a: 0},
{o: 114.64, f: 124.092, l: "C", a: 1},
{o: 124.092, f: 134.076, l: "E", a: 0},
{o: 134.076, f: 142.416, l: "B", a: 1},
{o: 142.416, f: 159.084, l: "B", a: 0},
{o: 159.084, f: 172.964, l: "B", a: 1},
{o: 172.964, f: 184.64, l: "B", a: 0},
{o: 184.64, f: 190.048, l: "G", a: 1}],
[{o: 0.224, f: 7.936, l: "E", a: 0},
{o: 7.936, f: 16.34, l: "F", a: 1},
{o: 16.34, f: 28.544, l: "G", a: 0},
{o: 28.544, f: 35.752, l: "H", a: 1},
{o: 35.752, f: 47.972, l: "A", a: 0},
{o: 47.972, f: 54.068, l: "A", a: 1},
{o: 54.068, f: 70.212, l: "I", a: 0},
{o: 70.212, f: 87.42, l: "J", a: 1},
{o: 87.42, f: 97.432, l: "D", a: 0},
{o: 97.432, f: 106.864, l: "D", a: 1},
{o: 106.864, f: 114.64, l: "C", a: 0},
{o: 114.64, f: 124.092, l: "C", a: 1},
{o: 124.092, f: 134.076, l: "A", a: 0},
{o: 134.076, f: 142.416, l: "B", a: 1},
{o: 142.416, f: 159.084, l: "B", a: 0},
{o: 159.084, f: 172.964, l: "B", a: 1},
{o: 172.964, f: 184.64, l: "B", a: 0},
{o: 184.64, f: 190.048, l: "K", a: 1}],
[{o: 0.493, f: 8.853, l: "8", a: 0},
{o: 8.853, f: 18.813, l: "7", a: 1},
{o: 18.813, f: 36.587, l: "5", a: 0},
{o: 36.587, f: 53.267, l: "2", a: 1},
{o: 53.267, f: 71.6, l: "4", a: 0},
{o: 71.6, f: 86.587, l: "1", a: 1},
{o: 86.587, f: 124.36, l: "3", a: 0},
{o: 124.36, f: 133.813, l: "2", a: 1},
{o: 133.813, f: 184.4, l: "1", a: 0},
{o: 184.4, f: 195.027, l: "6", a: 1}],
[{o: 0, f: 53.64, l: "a", a: 0},
{o: 53.64, f: 71.52, l: "b", a: 1},
{o: 71.52, f: 89.4, l: "b", a: 0},
{o: 89.4, f: 164.645, l: "c", a: 1},
{o: 164.645, f: 172.095, l: "d", a: 0},
{o: 172.095, f: 181.035, l: "d", a: 1},
{o: 181.035, f: 194.445, l: "e", a: 0}],
[{o: 0, f: 2.728, l: "n1", a: 0},
{o: 2.728, f: 20.956, l: "D", a: 1},
{o: 20.956, f: 36.618, l: "D", a: 0},
{o: 36.618, f: 45.5, l: "C", a: 1},
{o: 45.5, f: 54.102, l: "C", a: 0},
{o: 54.102, f: 68.603, l: "A", a: 1},
{o: 68.603, f: 71.889, l: "n6", a: 0},
{o: 71.889, f: 87.168, l: "A", a: 1},
{o: 87.168, f: 125.504, l: "n7", a: 0},
{o: 125.504, f: 134.107, l: "C", a: 1},
{o: 134.107, f: 149.943, l: "A", a: 0},
{o: 149.943, f: 167.729, l: "B", a: 1},
{o: 167.729, f: 185.585, l: "B", a: 0},
{o: 185.585, f: 195.094, l: "n10", a: 1}],
[{o: 0, f: 0.024, l: "G", a: 0},
{o: 0.024, f: 36.172, l: "E", a: 1},
{o: 36.172, f: 53.812, l: "A", a: 0},
{o: 53.812, f: 88.532, l: "C", a: 1},
{o: 88.532, f: 133.116, l: "F", a: 0},
{o: 133.116, f: 148.392, l: "C", a: 1},
{o: 148.392, f: 190.044, l: "D", a: 0},
{o: 190.044, f: 195.36, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000746.ogg";
