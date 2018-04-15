const router = require("express").Router();
const showRoutes = require("./shows");
const bandRoutes = require("./bands");
const venueRoutes = require("./venues");
const likesRoutes = require("./likes");
const userRoutes = require("./users");


router.use("/shows", showRoutes);
router.use("/bands", bandRoutes);
router.use("/venues", venueRoutes);
router.use("/users", userRoutes);

module.exports = router;
