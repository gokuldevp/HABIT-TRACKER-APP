// import the habit(db) from the models folder
const Habit = require('../models/habits');

module.exports.home = async (req, res) => {
    const navlinks = [{itemName:'Add Task',link:'/details/add-habit'},{itemName:'Weekly View',link:'/details/#'}]
    let variables = {
        title: "Daily habits",
        navLinks: navlinks
    }
    return res.render('details', variables);
};

module.exports.addHabit = async (req, res) => {
    const navlinks = [{itemName:'Detail View',link:'/details/home'},{itemName:'Weekly View',link:'/details/#'}]
    let variables = {
        title: "Add Habbit",
        navLinks: navlinks
    }
    return res.render('addHabit', variables);
};

module.exports.createHabit = async (req, res) => {
    Habit.findOne({ name: req.body.name })
    .exec()
    .then((habit) => {
        if (!habit) {

            Habit.create(req.body)
                .then((habit) => {
                    return res.redirect('/details/home');
                })
                .catch((err) => {
                    console.log("Error while creating details!");
                    return;
                });

        } else {
            console.log("Habbit already exists");
            return res.redirect('/details/home');
        }
    })
    .catch((err) => {
        console.log("Error in finding Habit!");
        return;
    });
};