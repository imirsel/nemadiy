var data = [
[{o: 0.032, f: 36.927, l: "A", a: 0},
{o: 36.927, f: 57.648, l: "B", a: 1},
{o: 57.648, f: 64.736, l: "C", a: 0},
{o: 64.736, f: 89.434, l: "B", a: 1},
{o: 89.434, f: 211.728, l: "D", a: 0},
{o: 211.728, f: 242.07, l: "E", a: 1},
{o: 242.07, f: 287.295, l: "F", a: 0},
{o: 287.295, f: 300.69, l: "Z", a: 1}],
[{o: 0.044, f: 7.18, l: "G", a: 0},
{o: 7.18, f: 22.692, l: "G", a: 1},
{o: 22.692, f: 32.7, l: "G", a: 0},
{o: 32.7, f: 54.088, l: "G", a: 1},
{o: 54.088, f: 80.912, l: "G", a: 0},
{o: 80.912, f: 89.188, l: "G", a: 1},
{o: 89.188, f: 105.384, l: "G", a: 0},
{o: 105.384, f: 124.52, l: "G", a: 1},
{o: 124.52, f: 138.132, l: "G", a: 0},
{o: 138.132, f: 150.216, l: "G", a: 1},
{o: 150.216, f: 162.508, l: "G", a: 0},
{o: 162.508, f: 172.256, l: "G", a: 1},
{o: 172.256, f: 184.908, l: "G", a: 0},
{o: 184.908, f: 201.176, l: "G", a: 1},
{o: 201.176, f: 217.724, l: "G", a: 0},
{o: 217.724, f: 227.132, l: "G", a: 1},
{o: 227.132, f: 240.756, l: "G", a: 0},
{o: 240.756, f: 259.108, l: "A", a: 1},
{o: 259.108, f: 276.144, l: "G", a: 0},
{o: 276.144, f: 287.268, l: "A", a: 1},
{o: 287.268, f: 294.252, l: "A", a: 0},
{o: 294.252, f: 300.5, l: "B", a: 1}],
[{o: 0.044, f: 7.18, l: "G", a: 0},
{o: 7.18, f: 22.692, l: "A", a: 1},
{o: 22.692, f: 32.7, l: "A", a: 0},
{o: 32.7, f: 54.088, l: "A", a: 1},
{o: 54.088, f: 80.912, l: "A", a: 0},
{o: 80.912, f: 89.188, l: "G", a: 1},
{o: 89.188, f: 105.384, l: "E", a: 0},
{o: 105.384, f: 124.52, l: "E", a: 1},
{o: 124.52, f: 138.132, l: "E", a: 0},
{o: 138.132, f: 150.216, l: "C", a: 1},
{o: 150.216, f: 162.508, l: "C", a: 0},
{o: 162.508, f: 172.256, l: "F", a: 1},
{o: 172.256, f: 184.908, l: "F", a: 0},
{o: 184.908, f: 201.176, l: "D", a: 1},
{o: 201.176, f: 217.724, l: "D", a: 0},
{o: 217.724, f: 227.132, l: "B", a: 1},
{o: 227.132, f: 240.756, l: "B", a: 0},
{o: 240.756, f: 259.108, l: "H", a: 1},
{o: 259.108, f: 276.144, l: "A", a: 0},
{o: 276.144, f: 287.268, l: "I", a: 1},
{o: 287.268, f: 294.252, l: "J", a: 0},
{o: 294.252, f: 300.5, l: "K", a: 1}],
[{o: 0.6, f: 3.187, l: "8", a: 0},
{o: 3.187, f: 35.627, l: "2", a: 1},
{o: 35.627, f: 87.56, l: "1", a: 0},
{o: 87.56, f: 137.28, l: "3", a: 1},
{o: 137.28, f: 184.053, l: "1", a: 0},
{o: 184.053, f: 190.48, l: "2", a: 1},
{o: 190.48, f: 202.453, l: "3", a: 0},
{o: 202.453, f: 213.8, l: "2", a: 1},
{o: 213.8, f: 240.48, l: "4", a: 0},
{o: 240.48, f: 253.213, l: "2", a: 1},
{o: 253.213, f: 259.853, l: "7", a: 0},
{o: 259.853, f: 284.613, l: "1", a: 1},
{o: 284.613, f: 293.68, l: "5", a: 0},
{o: 293.68, f: 300.467, l: "6", a: 1}],
[{o: 0, f: 50.66, l: "a", a: 0},
{o: 50.66, f: 96.105, l: "a", a: 1},
{o: 96.105, f: 120.69, l: "b", a: 0},
{o: 120.69, f: 155.705, l: "b", a: 1},
{o: 155.705, f: 212.325, l: "a", a: 0},
{o: 212.325, f: 260.005, l: "a", a: 1},
{o: 260.005, f: 300.235, l: "c", a: 0}],
[{o: 0, f: 14.06, l: "n1", a: 0},
{o: 14.06, f: 26.854, l: "B", a: 1},
{o: 26.854, f: 35.921, l: "n2", a: 0},
{o: 35.921, f: 48.843, l: "B", a: 1},
{o: 48.843, f: 60.116, l: "n3", a: 0},
{o: 60.116, f: 73.108, l: "B", a: 1},
{o: 73.108, f: 89.699, l: "n4", a: 0},
{o: 89.699, f: 101.97, l: "A", a: 1},
{o: 101.97, f: 114.242, l: "n5", a: 0},
{o: 114.242, f: 126.502, l: "A", a: 1},
{o: 126.502, f: 138.565, l: "A", a: 0},
{o: 138.565, f: 155.167, l: "n6", a: 1},
{o: 155.167, f: 166.975, l: "C", a: 0},
{o: 166.975, f: 178.666, l: "C", a: 1},
{o: 178.666, f: 191.53, l: "n7", a: 0},
{o: 191.53, f: 203.883, l: "A", a: 1},
{o: 203.883, f: 300.606, l: "n8", a: 0}],
[{o: 0, f: 14.06, l: "n1", a: 0},
{o: 14.06, f: 26.854, l: "B", a: 1},
{o: 26.854, f: 35.921, l: "n2", a: 0},
{o: 35.921, f: 48.843, l: "B", a: 1},
{o: 48.843, f: 60.116, l: "n3", a: 0},
{o: 60.116, f: 73.108, l: "B", a: 1},
{o: 73.108, f: 89.699, l: "n4", a: 0},
{o: 89.699, f: 101.97, l: "A", a: 1},
{o: 101.97, f: 114.242, l: "n5", a: 0},
{o: 114.242, f: 126.502, l: "A", a: 1},
{o: 126.502, f: 138.565, l: "A", a: 0},
{o: 138.565, f: 155.167, l: "n6", a: 1},
{o: 155.167, f: 166.975, l: "C", a: 0},
{o: 166.975, f: 178.666, l: "C", a: 1},
{o: 178.666, f: 191.53, l: "n7", a: 0},
{o: 191.53, f: 203.883, l: "A", a: 1},
{o: 203.883, f: 300.606, l: "n8", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001044.ogg";
