var data = [
[{o: 0, f: 2.522, l: "A", a: 0},
{o: 2.522, f: 25.223, l: "B", a: 1},
{o: 25.223, f: 47.503, l: "C", a: 0},
{o: 47.503, f: 58.703, l: "B", a: 1},
{o: 58.703, f: 81.047, l: "C", a: 0},
{o: 81.047, f: 92.146, l: "B'", a: 1},
{o: 92.146, f: 114.496, l: "D", a: 0},
{o: 114.496, f: 125.692, l: "B'", a: 1},
{o: 125.692, f: 148.027, l: "D", a: 0},
{o: 148.027, f: 165.215, l: "E", a: 1},
{o: 165.215, f: 198.187, l: "D'", a: 0},
{o: 198.187, f: 220.577, l: "E", a: 1},
{o: 220.577, f: 243.784, l: "F", a: 0}],
[{o: 0.028, f: 7.364, l: "B", a: 0},
{o: 7.364, f: 20.96, l: "B", a: 1},
{o: 20.96, f: 36.664, l: "B", a: 0},
{o: 36.664, f: 53.408, l: "B", a: 1},
{o: 53.408, f: 67.712, l: "B", a: 0},
{o: 67.712, f: 80.968, l: "B", a: 1},
{o: 80.968, f: 92.132, l: "B", a: 0},
{o: 92.132, f: 106.436, l: "B", a: 1},
{o: 106.436, f: 114.464, l: "B", a: 0},
{o: 114.464, f: 124.908, l: "B", a: 1},
{o: 124.908, f: 136.44, l: "B", a: 0},
{o: 136.44, f: 149.008, l: "B", a: 1},
{o: 149.008, f: 162.956, l: "B", a: 0},
{o: 162.956, f: 176.916, l: "B", a: 1},
{o: 176.916, f: 184.588, l: "B", a: 0},
{o: 184.588, f: 194.708, l: "B", a: 1},
{o: 194.708, f: 209.36, l: "B", a: 0},
{o: 209.36, f: 224.1, l: "B", a: 1},
{o: 224.1, f: 233.636, l: "B", a: 0},
{o: 233.636, f: 239.584, l: "B", a: 1}],
[{o: 0.028, f: 7.364, l: "D", a: 0},
{o: 7.364, f: 20.96, l: "E", a: 1},
{o: 20.96, f: 36.664, l: "B", a: 0},
{o: 36.664, f: 53.408, l: "B", a: 1},
{o: 53.408, f: 67.712, l: "B", a: 0},
{o: 67.712, f: 80.968, l: "B", a: 1},
{o: 80.968, f: 92.132, l: "C", a: 0},
{o: 92.132, f: 106.436, l: "B", a: 1},
{o: 106.436, f: 114.464, l: "B", a: 0},
{o: 114.464, f: 124.908, l: "C", a: 1},
{o: 124.908, f: 136.44, l: "F", a: 0},
{o: 136.44, f: 149.008, l: "B", a: 1},
{o: 149.008, f: 162.956, l: "A", a: 0},
{o: 162.956, f: 176.916, l: "A", a: 1},
{o: 176.916, f: 184.588, l: "B", a: 0},
{o: 184.588, f: 194.708, l: "B", a: 1},
{o: 194.708, f: 209.36, l: "G", a: 0},
{o: 209.36, f: 224.1, l: "A", a: 1},
{o: 224.1, f: 233.636, l: "H", a: 0},
{o: 233.636, f: 239.584, l: "I", a: 1}],
[{o: 0.36, f: 3.333, l: "7", a: 0},
{o: 3.333, f: 13.12, l: "2", a: 1},
{o: 13.12, f: 24.973, l: "4", a: 0},
{o: 24.973, f: 30.907, l: "1", a: 1},
{o: 30.907, f: 36.48, l: "3", a: 0},
{o: 36.48, f: 45.56, l: "1", a: 1},
{o: 45.56, f: 58.48, l: "2", a: 0},
{o: 58.48, f: 64.4, l: "1", a: 1},
{o: 64.4, f: 69.973, l: "3", a: 0},
{o: 69.973, f: 80.453, l: "1", a: 1},
{o: 80.453, f: 91.253, l: "2", a: 0},
{o: 91.253, f: 103.467, l: "1", a: 1},
{o: 103.467, f: 106.96, l: "3", a: 0},
{o: 106.96, f: 114.987, l: "1", a: 1},
{o: 114.987, f: 122.32, l: "2", a: 0},
{o: 122.32, f: 137.32, l: "6", a: 1},
{o: 137.32, f: 158.96, l: "1", a: 0},
{o: 158.96, f: 164.533, l: "4", a: 1},
{o: 164.533, f: 169.067, l: "3", a: 0},
{o: 169.067, f: 220.027, l: "1", a: 1},
{o: 220.027, f: 241.387, l: "5", a: 0},
{o: 241.387, f: 243.533, l: "8", a: 1}],
[{o: 0, f: 23.095, l: "a", a: 0},
{o: 23.095, f: 50.66, l: "b", a: 1},
{o: 50.66, f: 84.185, l: "b", a: 0},
{o: 84.185, f: 139.315, l: "c", a: 1},
{o: 139.315, f: 174.33, l: "d", a: 0},
{o: 174.33, f: 206.365, l: "b", a: 1},
{o: 206.365, f: 242.87, l: "d", a: 0}],
[{o: 0, f: 26.239, l: "n1", a: 0},
{o: 26.239, f: 48.553, l: "A", a: 1},
{o: 48.553, f: 59.722, l: "n2", a: 0},
{o: 59.722, f: 82.059, l: "A", a: 1},
{o: 82.059, f: 93.217, l: "n3", a: 0},
{o: 93.217, f: 115.542, l: "A", a: 1},
{o: 115.542, f: 137.88, l: "n4", a: 0},
{o: 137.88, f: 160.206, l: "A", a: 1},
{o: 160.206, f: 176.948, l: "n5", a: 0},
{o: 176.948, f: 199.274, l: "A", a: 1},
{o: 199.274, f: 221.96, l: "A", a: 0},
{o: 221.96, f: 243.392, l: "n6", a: 1}],
[{o: 0, f: 0.024, l: "F", a: 0},
{o: 0.024, f: 1.764, l: "E", a: 1},
{o: 1.764, f: 14.68, l: "A", a: 0},
{o: 14.68, f: 43.84, l: "C", a: 1},
{o: 43.84, f: 57.064, l: "D", a: 0},
{o: 57.064, f: 80.448, l: "C", a: 1},
{o: 80.448, f: 92.484, l: "A", a: 0},
{o: 92.484, f: 101.908, l: "D", a: 1},
{o: 101.908, f: 113.248, l: "B", a: 0},
{o: 113.248, f: 122.836, l: "A", a: 1},
{o: 122.836, f: 144.124, l: "B", a: 0},
{o: 144.124, f: 175.172, l: "D", a: 1},
{o: 175.172, f: 187.388, l: "B", a: 0},
{o: 187.388, f: 239.392, l: "D", a: 1},
{o: 239.392, f: 243.667, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001571.ogg";

var artist = "Tricky";

var track = "Feed Me";