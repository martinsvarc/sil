import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const ALABAMA_CITIES: City[] = [
  { rank: 1, name: "Huntsville" },
  { rank: 2, name: "Birmingham" },
  { rank: 3, name: "Montgomery" },
  { rank: 4, name: "Mobile" },
  { rank: 5, name: "Tuscaloosa" },
  { rank: 6, name: "Hoover" },
  { rank: 7, name: "Auburn" },
  { rank: 8, name: "Dothan" },
  { rank: 9, name: "Madison" },
  { rank: 10, name: "Decatur" },
  { rank: 11, name: "Florence" },
  { rank: 12, name: "Prattville" },
  { rank: 13, name: "Phenix City" },
  { rank: 14, name: "Vestavia Hills" },
  { rank: 15, name: "Opelika" },
  { rank: 16, name: "Alabaster" },
  { rank: 17, name: "Gadsden" },
  { rank: 18, name: "Athens" },
  { rank: 19, name: "Daphne" },
  { rank: 20, name: "Northport" },
  { rank: 21, name: "Enterprise" },
  { rank: 22, name: "Homewood" },
  { rank: 23, name: "Trussville" },
  { rank: 24, name: "Foley" },
  { rank: 25, name: "Fairhope" },
  { rank: 26, name: "Pelham" },
  { rank: 27, name: "Bessemer" },
  { rank: 28, name: "Albertville" },
  { rank: 29, name: "Helena" },
  { rank: 30, name: "Oxford" },
  { rank: 31, name: "Mountain Brook" },
  { rank: 32, name: "Anniston" },
  { rank: 33, name: "Cullman" },
  { rank: 34, name: "Calera" },
  { rank: 35, name: "Prichard" },
  { rank: 36, name: "Tillmans Corner" },
  { rank: 37, name: "Troy" },
  { rank: 38, name: "Millbrook" },
  { rank: 39, name: "Muscle Shoals" },
  { rank: 40, name: "Gulf Shores" },
  { rank: 41, name: "Chelsea" },
  { rank: 42, name: "McCalla" },
  { rank: 43, name: "Saraland" },
  { rank: 44, name: "Selma" },
  { rank: 45, name: "Gardendale" },
  { rank: 46, name: "Hartselle" },
  { rank: 47, name: "Hueytown" },
  { rank: 48, name: "Scottsboro" },
  { rank: 49, name: "Center Point" },
  { rank: 50, name: "Fort Payne" },
  { rank: 51, name: "Jacksonville" },
  { rank: 52, name: "Talladega" },
  { rank: 53, name: "Jasper" },
  { rank: 54, name: "Alexander City" },
  { rank: 55, name: "Ozark" },
  { rank: 56, name: "Pell City" },
  { rank: 57, name: "Moody" },
  { rank: 58, name: "Irondale" },
  { rank: 59, name: "Leeds" },
  { rank: 60, name: "Eufaula" },
  { rank: 61, name: "Sylacauga" },
  { rank: 62, name: "Pike Road" },
  { rank: 63, name: "Spanish Fort" },
  { rank: 64, name: "Russellville" },
  { rank: 65, name: "Saks" },
  { rank: 66, name: "Boaz" },
  { rank: 67, name: "Rainbow City" },
  { rank: 68, name: "Valley" },
  { rank: 69, name: "Clay" },
  { rank: 70, name: "Meridianville" },
  { rank: 71, name: "Southside" },
  { rank: 72, name: "Fultondale" },
  { rank: 73, name: "Fairfield" },
  { rank: 74, name: "Meadowbrook" },
  { rank: 75, name: "Pleasant Grove" },
  { rank: 76, name: "Sheffield" },
  { rank: 77, name: "Clanton" },
  { rank: 78, name: "Tuscumbia" },
  { rank: 79, name: "Guntersville" },
  { rank: 80, name: "Forestdale" },
  { rank: 81, name: "Arab" },
  { rank: 82, name: "Andalusia" },
  { rank: 83, name: "Orange Beach" },
  { rank: 84, name: "Tuskegee" },
  { rank: 85, name: "Bay Minette" },
  { rank: 86, name: "Atmore" },
  { rank: 87, name: "Brook Highland" },
  { rank: 88, name: "Montevallo" },
  { rank: 89, name: "Lincoln" },
  { rank: 90, name: "Pinson" },
  { rank: 91, name: "Robertsdale" },
  { rank: 92, name: "Wetumpka" },
  { rank: 93, name: "Oneonta" },
  { rank: 94, name: "Hamilton" },
  { rank: 95, name: "Greenville" },
  { rank: 96, name: "Satsuma" },
  { rank: 97, name: "Opp" },
  { rank: 98, name: "Demopolis" },
  { rank: 99, name: "Lanett" },
  { rank: 100, name: "Margaret" },
  { rank: 101, name: "Harvest" },
  { rank: 102, name: "Chickasaw" },
  { rank: 103, name: "Semmes" },
  { rank: 104, name: "Moores Mill" },
  { rank: 105, name: "Highland Lakes" },
  { rank: 106, name: "Rainsville" },
  { rank: 107, name: "Attalla" },
  { rank: 108, name: "Tarrant" },
  { rank: 109, name: "Grayson Valley" },
  { rank: 110, name: "Monroeville" },
  { rank: 111, name: "Fort Rucker" },
  { rank: 112, name: "Smiths Station" },
  { rank: 113, name: "Odenville" },
  { rank: 114, name: "Headland" },
  { rank: 115, name: "Glencoe" },
  { rank: 116, name: "Roanoke" },
  { rank: 117, name: "Springville" },
  { rank: 118, name: "Redland" },
  { rank: 119, name: "Brewton" },
  { rank: 120, name: "Holtville" },
  { rank: 121, name: "Theodore" },
  { rank: 122, name: "Loxley" },
  { rank: 123, name: "Daleville" },
  { rank: 124, name: "Triana" },
  { rank: 125, name: "Columbiana" },
  { rank: 126, name: "Midfield" },
  { rank: 127, name: "Winfield" },
  { rank: 128, name: "Tallassee" },
  { rank: 129, name: "Hokes Bluff" },
  { rank: 130, name: "Piedmont" },
  { rank: 131, name: "Childersburg" },
  { rank: 132, name: "Kimberly" },
  { rank: 133, name: "Jackson" },
  { rank: 134, name: "Argo" },
  { rank: 135, name: "Haleyville" },
  { rank: 136, name: "Mount Olive" },
  { rank: 137, name: "Geneva" },
  { rank: 138, name: "Ladonia" },
  { rank: 139, name: "Adamsville" },
  { rank: 140, name: "Fayette" },
  { rank: 141, name: "Hazel Green" },
  { rank: 142, name: "Valley Grande" },
  { rank: 143, name: "Citronelle" },
  { rank: 144, name: "Priceville" },
  { rank: 145, name: "Lake View" },
  { rank: 146, name: "Centre" },
  { rank: 147, name: "Pine Level" },
  { rank: 148, name: "Cottondale" },
  { rank: 149, name: "Emerald Mountain" },
  { rank: 150, name: "Alexandria" },
  { rank: 151, name: "Moundville" },
  { rank: 152, name: "Holt" },
  { rank: 153, name: "Grand Bay" },
  { rank: 154, name: "Elba" },
  { rank: 155, name: "Thomasville" },
  { rank: 156, name: "Heflin" },
  { rank: 157, name: "Moulton" },
  { rank: 158, name: "Hanceville" },
  { rank: 159, name: "Weaver" },
  { rank: 160, name: "Evergreen" },
  { rank: 161, name: "West End-Cobb Town" },
  { rank: 162, name: "Bon Secour" },
  { rank: 163, name: "Eagle Point" },
  { rank: 164, name: "Warrior" },
  { rank: 165, name: "Red Bay" },
  { rank: 166, name: "Huguley" },
  { rank: 167, name: "Union Springs" },
  { rank: 168, name: "Livingston" },
  { rank: 169, name: "Underwood-Petersville" },
  { rank: 170, name: "Jemison" },
  { rank: 171, name: "Owens Cross Roads" },
  { rank: 172, name: "Remlap" },
  { rank: 173, name: "New Hope" },
  { rank: 174, name: "Dadeville" },
  { rank: 175, name: "Stapleton" },
  { rank: 176, name: "Choccolocco" },
  { rank: 177, name: "Hartford" },
  { rank: 178, name: "Eutaw" },
  { rank: 179, name: "Centreville" },
  { rank: 180, name: "Luverne" },
  { rank: 181, name: "Good Hope" },
  { rank: 182, name: "La Fayette" },
  { rank: 183, name: "Marion" },
  { rank: 184, name: "Brent" },
  { rank: 185, name: "Trinity" },
  { rank: 186, name: "Sumiton" },
  { rank: 187, name: "Indian Springs Village" },
  { rank: 188, name: "Lineville" },
  { rank: 189, name: "Brookwood" },
  { rank: 190, name: "Ashville" },
  { rank: 191, name: "Abbeville" },
  { rank: 192, name: "Ashford" },
  { rank: 193, name: "Taylor" },
  { rank: 194, name: "Midland City" },
  { rank: 195, name: "Henagar" },
  { rank: 196, name: "Vance" },
  { rank: 197, name: "Silverhill" },
  { rank: 198, name: "Kinsey" },
  { rank: 199, name: "Riverside" },
  { rank: 200, name: "York" },
  { rank: 201, name: "Lillian" },
  { rank: 202, name: "Bridgeport" },
  { rank: 203, name: "Carlisle-Rockledge" },
  { rank: 204, name: "Marbury" },
  { rank: 205, name: "Dora" },
  { rank: 206, name: "Morris" },
  { rank: 207, name: "East Brewton" },
  { rank: 208, name: "Brighton" },
  { rank: 209, name: "Clayton" },
  { rank: 210, name: "Thorsby" },
  { rank: 211, name: "Slocomb" },
  { rank: 212, name: "Greensboro" },
  { rank: 213, name: "Elberta" },
  { rank: 214, name: "Bayou La Batre" },
  { rank: 215, name: "Guin" },
  { rank: 216, name: "Whitesboro" },
  { rank: 217, name: "Rehobeth" },
  { rank: 218, name: "Collinsville" },
  { rank: 219, name: "Vincent" },
  { rank: 220, name: "Cowarts" },
  { rank: 221, name: "Aliceville" },
  { rank: 222, name: "Brundidge" },
  { rank: 223, name: "Lipscomb" },
  { rank: 224, name: "Stevenson" },
  { rank: 225, name: "Creola" },
  { rank: 226, name: "Coaling" },
  { rank: 227, name: "Westover" },
  { rank: 228, name: "Wilsonville" },
  { rank: 229, name: "Florala" },
  { rank: 230, name: "Dauphin Island" },
  { rank: 231, name: "Ashland" },
  { rank: 232, name: "Uniontown" },
  { rank: 233, name: "Cedar Bluff" },
  { rank: 234, name: "Harpersville" },
  { rank: 235, name: "Samson" },
  { rank: 236, name: "Crossville" },
  { rank: 237, name: "Level Plains" },
  { rank: 238, name: "Graysville" },
  { rank: 239, name: "Vernon" },
  { rank: 240, name: "Linden" },
  {rank: 241, name: "Blountsville" },
  { rank: 242, name: "Sulligent" },
  { rank: 243, name: "Sylvania" },
  { rank: 244, name: "Sardis City" },
  { rank: 245, name: "Selmont-West Selmont" },
  { rank: 246, name: "Deatsville" },
  { rank: 247, name: "Butler" },
  { rank: 248, name: "Carbon Hill" },
  { rank: 249, name: "Grove Hill" },
  { rank: 250, name: "Ragland" },
  { rank: 251, name: "Point Clear" },
  { rank: 252, name: "Concord" },
  { rank: 253, name: "Camden" },
  { rank: 254, name: "Newton" },
  { rank: 255, name: "Cordova" },
  { rank: 256, name: "Stewartville" },
  { rank: 257, name: "Woodstock" },
  { rank: 258, name: "Summerdale" },
  { rank: 259, name: "Sylvan Springs" },
  { rank: 260, name: "Malvern" },
  { rank: 261, name: "Gordo" },
  { rank: 262, name: "New Brockton" },
  { rank: 263, name: "Smoke Rise" },
  { rank: 264, name: "Ardmore" },
  { rank: 265, name: "Flomaton" },
  { rank: 266, name: "Rock Creek" },
  { rank: 267, name: "Hackleburg" },
  { rank: 268, name: "Reform" },
  { rank: 269, name: "Elmore" },
  { rank: 270, name: "Rogersville" },
  { rank: 271, name: "Mount Vernon" },
  { rank: 272, name: "Hayden" },
  { rank: 273, name: "Coats Bend" },
  { rank: 274, name: "Munford" },
  { rank: 275, name: "Egypt" },
  { rank: 276, name: "Webb" },
  { rank: 277, name: "Coosada" },
  { rank: 278, name: "Blue Ridge" },
  { rank: 279, name: "Georgiana" },
  { rank: 280, name: "Cleveland" },
  { rank: 281, name: "Goodwater" },
  { rank: 282, name: "Locust Fork" },
  { rank: 283, name: "Lookout Mountain" },
  { rank: 284, name: "Eclectic" },
  { rank: 285, name: "Fayetteville" },
  { rank: 286, name: "Ohatchee" },
  { rank: 287, name: "Falkville" },
  { rank: 288, name: "Clio" },
  { rank: 289, name: "Brookside" },
  { rank: 290, name: "Berry" },
  { rank: 291, name: "West Blocton" },
  { rank: 292, name: "Vandiver" },
  { rank: 293, name: "Dunnavant" },
  { rank: 294, name: "Gallant" },
  { rank: 295, name: "Shoal Creek" },
  { rank: 296, name: "Fort Deposit" },
  { rank: 297, name: "Double Springs" },
  { rank: 298, name: "Ballplay" },
  { rank: 299, name: "Frisco City" },
  { rank: 300, name: "Cottonwood" },
  { rank: 301, name: "Leroy" },
  { rank: 302, name: "Town Creek" },
  { rank: 303, name: "Bear Creek" },
  { rank: 304, name: "Grant" },
  { rank: 305, name: "Chatom" },
  { rank: 306, name: "Littleville" },
  { rank: 307, name: "Snead" },
  { rank: 308, name: "Killen" },
  { rank: 309, name: "New Market" },
  { rank: 310, name: "Steele" },
  { rank: 311, name: "Leesburg" },
  { rank: 312, name: "Fyffe" },
  { rank: 313, name: "Phil Campbell" },
  { rank: 314, name: "Tidmore Bend" },
  { rank: 315, name: "Parrish" },
  { rank: 316, name: "Carrollton" },
  { rank: 317, name: "Cherokee" },
  { rank: 318, name: "Millport" },
  { rank: 319, name: "Camp Hill" },
  { rank: 320, name: "Altoona" },
  { rank: 321, name: "Minor" },
  { rank: 322, name: "Pea Ridge" },
  { rank: 323, name: "Hollywood" },
  { rank: 324, name: "Powell" },
  { rank: 325, name: "Geraldine" },
  { rank: 326, name: "Wadley" },
  { rank: 327, name: "Coker" },
  { rank: 328, name: "Holly Pond" },
  { rank: 329, name: "Notasulga" },
  { rank: 330, name: "Skyline" },
  { rank: 331, name: "Magnolia Springs" },
  { rank: 332, name: "Gurley" },
  { rank: 333, name: "Redstone Arsenal" },
  { rank: 334, name: "Brilliant" },
  { rank: 335, name: "Somerville" },
  { rank: 336, name: "White Plains" },
  { rank: 337, name: "Autaugaville" },
  { rank: 338, name: "Susan Moore" },
  { rank: 339, name: "Brantley" },
  { rank: 340, name: "Douglas" },
  { rank: 341, name: "New Union" },
  { rank: 342, name: "Walnut Grove" },
  { rank: 343, name: "Edgewater" },
  { rank: 344, name: "Section" },
  { rank: 345, name: "Mosses" },
  { rank: 346, name: "New Site" },
  { rank: 347, name: "Hayneville" },
  { rank: 348, name: "Mulga" },
  { rank: 349, name: "Shelby" },
  { rank: 350, name: "Our Town" },
  { rank: 351, name: "Woodville" },
  { rank: 352, name: "Jacksons' Gap" },
  { rank: 353, name: "Wedowee" },
  { rank: 354, name: "Oakman" },
  { rank: 355, name: "Hobson City" },
  { rank: 356, name: "White Hall" },
  { rank: 357, name: "Ider" },
  { rank: 358, name: "Lexington" },
  { rank: 359, name: "Sterrett" },
  { rank: 360, name: "St. Florian" },
  { rank: 361, name: "Perdido" },
  { rank: 362, name: "Belle Fontaine" },
  { rank: 363, name: "Gilbertown" },
  { rank: 364, name: "Columbia" },
  { rank: 365, name: "Pine Hill" },
  { rank: 366, name: "Baileyton" },
  { rank: 367, name: "Pisgah" },
  { rank: 368, name: "Brantleyville" },
  { rank: 369, name: "McDonald Chapel" },
  { rank: 370, name: "Addison" },
  { rank: 371, name: "Ariton" },
  { rank: 372, name: "Ivalee" },
  { rank: 373, name: "Leighton" },
  { rank: 374, name: "Maplesville" },
  { rank: 375, name: "Babbie" },
  { rank: 376, name: "West Point" },
  { rank: 377, name: "Hackneyville" },
  { rank: 378, name: "South Vinemont" },
  { rank: 379, name: "Lynn" },
  { rank: 380, name: "Hollis Crossroads" },
  { rank: 381, name: "Reece City" },
  { rank: 382, name: "Oak Grove" },
  { rank: 383, name: "Sand Rock" },
  { rank: 384, name: "Kinston" },
  { rank: 385, name: "Pinckard" },
  { rank: 386, name: "Wilton" },
  { rank: 387, name: "Valley Head" },
  { rank: 388, name: "Courtland" },
  { rank: 389, name: "Grimes" },
  { rank: 390, name: "Eva" },
  { rank: 391, name: "Perdido Beach" },
  { rank: 392, name: "Trafford" },
  { rank: 393, name: "Mignon" },
  { rank: 394, name: "Dodge City" },
  { rank: 395, name: "Newville" },
  { rank: 396, name: "Allgood" },
  { rank: 397, name: "Franklin" },
  { rank: 398, name: "Garden City" },
  { rank: 399, name: "Fairview" },
  { rank: 400, name: "Pickensville" },
  { rank: 401, name: "Berlin" },
  { rank: 402, name: "Excel" },
  { rank: 403, name: "Millerville" },
  { rank: 404, name: "River Falls" },
  { rank: 405, name: "North Courtland" },
  { rank: 406, name: "Stockton" },
  { rank: 407, name: "McKenzie" },
  { rank: 408, name: "Clayhatchee" },
  { rank: 409, name: "West Jefferson" },
  { rank: 410, name: "Nixburg" },
  { rank: 411, name: "Avon" },
  { rank: 412, name: "Ray" },
  { rank: 413, name: "Nances Creek" },
  { rank: 414, name: "St. Stephens" },
  { rank: 415, name: "Castleberry" },
  { rank: 416, name: "Hytop" },
  { rank: 417, name: "Lockhart" },
  { rank: 418, name: "Elkmont" },
  { rank: 419, name: "Joppa" },
  { rank: 420, name: "Red Level" },
  { rank: 421, name: "Millry" },
  { rank: 422, name: "Ranburne" },
  { rank: 423, name: "Pleasant Groves" },
  { rank: 424, name: "Highland Lake" },
  { rank: 425, name: "Hammondville" },
  { rank: 426, name: "Kennedy" },
  { rank: 427, name: "Glen Allen" },
  { rank: 428, name: "Forkland" },
  { rank: 429, name: "Napier Field" },
  { rank: 430, name: "Weogufka" },
  { rank: 431, name: "Uriah" },
  { rank: 432, name: "Lisman" },
  { rank: 433, name: "Reeltown" },
  { rank: 434, name: "Hillsboro" },
  { rank: 435, name: "Rock Mills" },
  { rank: 436, name: "Hollins" },
  { rank: 437, name: "Midway" },
  { rank: 438, name: "Louisville" },
  { rank: 439, name: "Nectar" },
  { rank: 440, name: "Rosa" },
  { rank: 441, name: "Shorter" },
  { rank: 442, name: "East Point" },
  { rank: 443, name: "Silas" },
  { rank: 444, name: "Abanda" },
  { rank: 445, name: "Twin" },
  { rank: 446, name: "Sipsey" },
  { rank: 447, name: "Hatton" },
  { rank: 448, name: "Rockford" },
  { rank: 449, name: "Rutledge" },
  { rank: 450, name: "Dutton" },
  { rank: 451, name: "Hurtsboro" },
  { rank: 452, name: "Arley" },
  { rank: 453, name: "Shiloh" },
  { rank: 454, name: "Mentone" },
  { rank: 455, name: "Mount Olive" },
  { rank: 456, name: "Pennington" },
  { rank: 457, name: "Vina" },
  { rank: 458, name: "County Line" },
  { rank: 459, name: "Thomaston" },
  { rank: 460, name: "Boykin" },
  { rank: 461, name: "Maytown" },
  { rank: 462, name: "Gordon" },
  { rank: 463, name: "Carolina" },
  { rank: 464, name: "Dozier" },
  { rank: 465, name: "Colony" },
  { rank: 466, name: "Cuba" },
  { rank: 467, name: "Boligee" },
  { rank: 468, name: "Langston" },
  { rank: 469, name: "Pine Ridge" },
  { rank: 470, name: "Sanford" },
  { rank: 471, name: "Goshen" },
  { rank: 472, name: "Hodges" },
  { rank: 473, name: "Madrid" },
  { rank: 474, name: "Epes" },
  { rank: 475, name: "Waldo" },
  { rank: 476, name: "Anderson" },
  { rank: 477, name: "Fruithurst" },
  { rank: 478, name: "Cullomburg" },
  { rank: 479, name: "Vinegar Bend" },
  { rank: 480, name: "Coffeeville" },
  { rank: 481, name: "Heath" },
  { rank: 482, name: "Fredonia" },
  { rank: 483, name: "Black" },
  { rank: 484, name: "Woodland" },
  { rank: 485, name: "Hanover" },
  { rank: 486, name: "Gordonville" },
  { rank: 487, name: "Repton" },
  { rank: 488, name: "Whatley" },
  { rank: 489, name: "Detroit" },
  { rank: 490, name: "Akron" },
  { rank: 491, name: "Vredenburgh" },
  { rank: 492, name: "Broomtown" },
  { rank: 493, name: "Sweet Water" },
  { rank: 494, name: "Edwardsville" },
  { rank: 495, name: "Fulton" },
  { rank: 496, name: "Yellow Bluff" },{ rank: 497, name: "Coffee Springs" },
  { rank: 498, name: "Horn Hill" },
  { rank: 499, name: "Bakerhill" },
  { rank: 500, name: "Gantt" },
  { rank: 501, name: "Macedonia" },
  { rank: 502, name: "Beatrice" },
  { rank: 503, name: "Morrison Crossroads" },
  { rank: 504, name: "McIntosh" },
  { rank: 505, name: "Axis" },
  { rank: 506, name: "Belk" },
  { rank: 507, name: "Fairford" },
  { rank: 508, name: "Beaverton" },
  { rank: 509, name: "Nauvoo" },
  { rank: 510, name: "Waterloo" },
  { rank: 511, name: "Paint Rock" },
  { rank: 512, name: "Onycha" },
  { rank: 513, name: "Daviston" },
  { rank: 514, name: "Gaylesville" },
  { rank: 515, name: "Kansas" },
  { rank: 516, name: "Bon Air" },
  { rank: 517, name: "Riverview" },
  { rank: 518, name: "Lakeview" },
  { rank: 519, name: "Union" },
  { rank: 520, name: "Loachapoka" },
  { rank: 521, name: "Gainesville" },
  { rank: 522, name: "Providence" },
  { rank: 523, name: "Banks" },
  { rank: 524, name: "Geiger" },
  { rank: 525, name: "Glenwood" },
  { rank: 526, name: "Cusseta" },
  { rank: 527, name: "Waverly" },
  { rank: 528, name: "Gu-Win" },
  { rank: 529, name: "Bristow Cove" },
  { rank: 530, name: "Chunchula" },
  { rank: 531, name: "Talladega Springs" },
  { rank: 532, name: "Orrville" },
  { rank: 533, name: "Eldridge" },
  { rank: 534, name: "Toxey" },
  { rank: 535, name: "Hobson" },
  { rank: 536, name: "Newbern" },
  { rank: 537, name: "Pine Apple" },
  { rank: 538, name: "Equality" },
  { rank: 539, name: "North Johns" },
  { rank: 540, name: "Pollard" },
  { rank: 541, name: "Billingsley" },
  { rank: 542, name: "Spring Garden" },
  { rank: 543, name: "Kellyton" },
  { rank: 544, name: "Lester" },
  { rank: 545, name: "Delta" },
  { rank: 546, name: "Five Points" },
  { rank: 547, name: "Haleburg" },
  { rank: 548, name: "Eunola" },
  { rank: 549, name: "Fruitdale" },
  { rank: 550, name: "Libertyville" },
  { rank: 551, name: "Spruce Pine" },
  { rank: 552, name: "Faunsdale" },
  { rank: 553, name: "Ridgeville" },
  { rank: 554, name: "Tibbie" },
  { rank: 555, name: "Blue Springs" },
  { rank: 556, name: "Panola" },
  { rank: 557, name: "Lowndesboro" },
  { rank: 558, name: "Union Grove" },
  { rank: 559, name: "Needham" },
  { rank: 560, name: "Myrtlewood" },
  { rank: 561, name: "Carlton" },
  { rank: 562, name: "Deer Park" },
  { rank: 563, name: "Petrey" },
  { rank: 564, name: "Goldville" },
  { rank: 565, name: "Cardiff" },
  { rank: 566, name: "Ethelsville" },
  { rank: 567, name: "Mooresville" },
  { rank: 568, name: "Standing Rock" },
  { rank: 569, name: "Graham" },
  { rank: 570, name: "Penton" },
  { rank: 571, name: "Bellamy" },
  { rank: 572, name: "Gulfcrest" },
  { rank: 573, name: "Putnam" },
  { rank: 574, name: "Benton" },
  { rank: 575, name: "Calvert" },
  { rank: 576, name: "Peterman" },
  { rank: 577, name: "Natural Bridge" },
  { rank: 578, name: "Hissop" },
  { rank: 579, name: "McMullen" },
  { rank: 580, name: "Nanafalia" },
  { rank: 581, name: "Dayton" },
  { rank: 582, name: "Memphis" },
  { rank: 583, name: "Bucks" },
  { rank: 584, name: "Emelle" },
  { rank: 585, name: "Malcolm" },
  { rank: 586, name: "Belgreen" },
  { rank: 587, name: "Oak Hill" },
  { rank: 588, name: "Megargel" },
  { rank: 589, name: "Movico" }
]

interface AlabamaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const AlabamaCitySelector: React.FC<AlabamaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Alabama City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = ALABAMA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {ALABAMA_CITIES.map((city) => (
              <SelectItem 
                key={city.rank} 
                value={city.name}
                className="text-white hover:bg-[#E4B649]/20"
                disabled={selectedCities.includes(city.name)}
              >
                {city.name}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      <p className="text-xs text-[#E4B649]/70">
        * You can select up to 10 cities from Alabama
      </p>
    </div>
  )
}

export default AlabamaCitySelector

