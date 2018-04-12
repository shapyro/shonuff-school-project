const router = require("express").Router();
const showRoutes = require("./shows");
const bandRoutes = require("./bands");
const venueRoutes = require("./venues");


router.use("/shows", showRoutes);
router.use("/bands", bandRoutes);
router.use("/venues", venueRoutes);

module.exports = router;
