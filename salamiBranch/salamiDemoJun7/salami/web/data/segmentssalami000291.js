var data = [
[{o: 1.811, f: 16.589, l: "A", a: 0},
{o: 16.589, f: 31.376, l: "C", a: 1},
{o: 31.376, f: 60.9, l: "D", a: 0},
{o: 60.9, f: 75.672, l: "C", a: 1},
{o: 75.672, f: 90.388, l: "E", a: 0},
{o: 90.388, f: 105.174, l: "E", a: 1},
{o: 105.174, f: 119.98, l: "G", a: 0},
{o: 119.98, f: 134.748, l: "C", a: 1},
{o: 134.748, f: 149.502, l: "H", a: 0},
{o: 149.502, f: 164.324, l: "C", a: 1},
{o: 164.324, f: 187.057, l: "C", a: 0}],
[{o: 0.136, f: 15.824, l: "B", a: 0},
{o: 15.824, f: 30.596, l: "B", a: 1},
{o: 30.596, f: 42.136, l: "B", a: 0},
{o: 42.136, f: 61.06, l: "B", a: 1},
{o: 61.06, f: 76.3, l: "B", a: 0},
{o: 76.3, f: 83.216, l: "B", a: 1},
{o: 83.216, f: 99.832, l: "B", a: 0},
{o: 99.832, f: 109.064, l: "B", a: 1},
{o: 109.064, f: 127.52, l: "A", a: 0},
{o: 127.52, f: 134.908, l: "A", a: 1},
{o: 134.908, f: 145.984, l: "C", a: 0},
{o: 145.984, f: 154.752, l: "C", a: 1},
{o: 154.752, f: 168.14, l: "C", a: 0},
{o: 168.14, f: 180.124, l: "C", a: 1}],
[{o: 0.136, f: 15.824, l: "B", a: 0},
{o: 15.824, f: 30.596, l: "B", a: 1},
{o: 30.596, f: 42.136, l: "B", a: 0},
{o: 42.136, f: 61.06, l: "B", a: 1},
{o: 61.06, f: 76.3, l: "B", a: 0},
{o: 76.3, f: 83.216, l: "B", a: 1},
{o: 83.216, f: 99.832, l: "B", a: 0},
{o: 99.832, f: 109.064, l: "B", a: 1},
{o: 109.064, f: 127.52, l: "A", a: 0},
{o: 127.52, f: 134.908, l: "C", a: 1},
{o: 134.908, f: 145.984, l: "D", a: 0},
{o: 145.984, f: 154.752, l: "E", a: 1},
{o: 154.752, f: 168.14, l: "F", a: 0},
{o: 168.14, f: 180.124, l: "G", a: 1}],
[{o: 0.36, f: 2.44, l: "8", a: 0},
{o: 2.44, f: 16.293, l: "6", a: 1},
{o: 16.293, f: 31.067, l: "5", a: 0},
{o: 31.067, f: 38.44, l: "1", a: 1},
{o: 38.44, f: 61.067, l: "3", a: 0},
{o: 61.067, f: 74.907, l: "2", a: 1},
{o: 74.907, f: 133.973, l: "1", a: 0},
{o: 133.973, f: 149.68, l: "4", a: 1},
{o: 149.68, f: 177.947, l: "2", a: 0},
{o: 177.947, f: 183.107, l: "7", a: 1}],
[{o: 0, f: 19.37, l: "a", a: 0},
{o: 19.37, f: 31.29, l: "b", a: 1},
{o: 31.29, f: 45.445, l: "c", a: 0},
{o: 45.445, f: 61.835, l: "c", a: 1},
{o: 61.835, f: 73.755, l: "b", a: 0},
{o: 73.755, f: 87.91, l: "c", a: 1},
{o: 87.91, f: 99.83, l: "c", a: 0},
{o: 99.83, f: 111.75, l: "b", a: 1},
{o: 111.75, f: 125.905, l: "c", a: 0},
{o: 125.905, f: 139.315, l: "c", a: 1},
{o: 139.315, f: 151.235, l: "b", a: 0},
{o: 151.235, f: 165.39, l: "c", a: 1},
{o: 165.39, f: 186.25, l: "c", a: 0}],
[{o: 0, f: 19.319, l: "n1", a: 0},
{o: 19.319, f: 39.625, l: "A", a: 1},
{o: 39.625, f: 59.931, l: "A", a: 0},
{o: 59.931, f: 76.556, l: "A", a: 1},
{o: 76.556, f: 85.786, l: "n4", a: 0},
{o: 85.786, f: 102.4, l: "A", a: 1},
{o: 102.4, f: 111.63, l: "n5", a: 0},
{o: 111.63, f: 128.244, l: "A", a: 1},
{o: 128.244, f: 148.561, l: "n6", a: 0},
{o: 148.561, f: 165.047, l: "A", a: 1},
{o: 165.047, f: 186.921, l: "n7", a: 0}],
[{o: 0, f: 0.004, l: "F", a: 0},
{o: 0.004, f: 13.98, l: "E", a: 1},
{o: 13.98, f: 134.444, l: "C", a: 0},
{o: 134.444, f: 146.452, l: "E", a: 1},
{o: 146.452, f: 179.688, l: "C", a: 0},
{o: 179.688, f: 187, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000291.ogg";
