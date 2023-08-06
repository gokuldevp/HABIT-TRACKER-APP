// import the habit(db) from the models folder
const Habit = require('../models/habits');
const HabitStatus = require('../models/habitStatus');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

module.exports.detailsView = async (req, res) => {
    const navlinks = [{itemName:'Add Task',link:'/details/add-habit'},{itemName:'Weekly View',link:'/details/weekly-view'}]
    const date = req.params['dayName'].slice(1);
    
    const habits = await Habit.find({});
    const habitStatus = await HabitStatus.find({date})

    let variables = {
        title: date + " Habits",
        navLinks: navlinks,
        Habit: habits,
        habitStatus: habitStatus,
    }
    return res.render('details', variables);
};

module.exports.addHabit = async (req, res) => {
    const navlinks = [{itemName:'Weekly View',link:'/details/weekly-view'}]
    let variables = {
        title: "Add Habbit",
        navLinks: navlinks
    }
    return res.render('addHabit', variables);
};

module.exports.weeklyView = async (req, res) => {
    const navlinks = [{itemName:'Add Task',link:'/details/add-habit'},]
    let variables = {
        title: "Weekly View",
        navLinks: navlinks,
        daysOfWeek: daysOfWeek
    }
    return res.render('week', variables);
};

module.exports.createHabit = async (req, res) => {
    Habit.findOne({ name: req.body.name })
    .exec()
    .then((habit) => {
        if (!habit) {

            Habit.create(req.body)
                .then((habit) => {
                    

                    daysOfWeek.forEach((day) => {
                    HabitStatus.create({
                        name: habit.name,
                        time: habit.time,
                        habit: habit._id,
                        date: day,
                        status: 'None',
                      })
                        .then((habitStatus) => {
                        //   console.log(`HabitStatus created for ${day}:`, habitStatus);
                        })
                        .catch((error) => {
                          console.error('Error creating HabitStatus:', error);
                        });
                    });
                    return res.redirect('/details/weekly-view');
                })
                .catch((err) => {
                    console.log("Error while creating details!");
                    return;
                });

        } else {
            console.log("Habbit already exists");
            return res.redirect('/details/weekly-view');
        }
    })
    .catch((err) => {
        console.log("Error in finding Habit!");
        return;
    });
};

module.exports.updateStatus = async (req, res) => {
    const habitId = req.body.habitId;
    await HabitStatus.findByIdAndUpdate({ _id: habitId}, {status: req.body.status});
    res.redirect('back');
}