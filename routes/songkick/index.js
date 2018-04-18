const router = require("express").Router();
const songKickShowRoutes = require("./songKickShows");
// const SongKickBandRoutes = require("./songKickBands");
// const SongKickVenuesRoutes = require("./songKickVenues");

router.use("/songKickShows", songKickShowRoutes);
// router.use("/songKickBands", songKickBandRoutes);

module.exports = router;
