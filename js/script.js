const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");
const createVehicle = function (type, wheels, color){
const vehicle = {
    type: type,
    wheels: wheels,
    color: color
};
    return vehicle;
};

const car = createVehicle ("car", 4, "red");
const bike = createVehicle ("bike", 2, "blue");
const tricycle = createVehicle ("tricycle", 3, "green");

const myVehicles = [car, bike, tricycle];

for (let vehicle of myVehicles){
    for (let key in vehicle) {
        console.log(key, vehicle[key]);
    }
}

bike.needsRepair = true;
tricycle.needsRepair = true;

button.addEventListener("click", function (){
    repairList.innerHTML = "";
    const vehicleRepairList = [bike, tricycle];
        vehicleRepairList.forEach(function(vehicles){
            listItem.innerHTML = `    tMy <span> ${vehicles.type}</span> needs some love!`;
        let listItem = document.createElement("li");
        repairList.append(listItem);
        });
});
