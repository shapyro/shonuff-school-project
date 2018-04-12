const router = require('express').Router();
const db = require('../../models')
const axios = require('axios')
const cheerio = require("cheerio");

module.exports = function(app) {

// A GET route for scraping the echojs website
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
  axios.get("http://www.showlistaustin.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // // Now, we grab every h2 within an article tag, and do the following:
    // $("td.h4").each(function(i, element) {
    //   // Save an empty result object
    //   var result = {};

    //   // Add the text and href of every link, and save them as properties of the result object
    //   result.title = $(this)
    //     // .children("b")
    //     .text();

      
    //   // result.link = $(this)
    //   //   .children("a")
    //   //   .attr("href");
    //   if (result.title !== ''){
    //     console.log(result.title.split("\n"))
    //   }

        // Now, we grab every h2 within an article tag, and do the following:
        $("td.h4").each(function(i, element) {
          // Save an empty result object
          
    
          // Add the text and href of every link, and save them as properties of the result object
          var showChunk = $(element).text();
          // var bands = $(showChunk).next();

          




          

          


            
    
          
          // result.link = $(this)
          //   .children("a")
          //   .attr("href");
          // if (result.title !== ''){
          //   console.log(result.title.split("\n"))
          // }
    


      // Create a new Article using the `result` object built from scraping
      // db.Article.create(result)
      //   .then(function(dbArticle) {
      //     // View the added result in the console
      //     console.log(dbArticle);
      //   })
      //   .catch(function(err) {
      //     // If an error occurred, send it to the client
      //     return res.json(err);
      //   });
    });
    res.send("Scrape Complete");
  });
});

  //==========================SHOWS====================================
  //===================================================================
  // Get all shows
  app.get("/api/shows", function(req, res) {
    db.Show.findAll({
      include: [
        {
          model: db.Band,
          as: 'Bands',
          required: true
        },
        {
          model: db.Venue,
          as: 'Venues',
          required: true
        }
      ]
    })
    .then(function(dbShow) {
      res.json(dbShow);
    });
  });
 
  // GET a show
  app.get("/api/shows/:id", function(req, res) {
    //console.log(req.user.uid);
    db.Show.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbShow) {
      res.json(dbShow);
    });
  });

  // CREATE a show
  app.post("/api/shows", function(req, res) {
    console.log(req.body)
    db.Show.create({
      name: req.body.name,
      venue_id: req.body.venue_id,
      band_id: req.body.band_id,
      date: req.body.date,
      showtime: req.body.showtime
    }).then(dbShow=>res.json(dbShow))
    .catch(err=>res.json(err));
  });

  // UPDATE a show
  app.put("/api/shows/:id", function(req, res) {
    // console.log(req.params.id);
    // console.log(req.body);
    db.Show.update({
      name: req.body.name,
      venue_id: req.body.venue_id,
      band_id: req.body.band_id,
      date: req.body.date,
      showtime: req.body.showtime
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function(dbShow) {
      res.json(dbShow);
    });
  });

  // DELETE a show
  app.delete("/api/shows/:id", function(req, res) {
    db.Show.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbShow) {
      res.json(dbShow);
    });
  });


  //==========================BANDS====================================
  //===================================================================
  // Get all bands
  app.get("/api/bands", function(req, res) {
    //console.log(req.user.uid);
    db.Band.findAll({})
    .then(function(dbBand) {
      res.json(dbBand);
    });
  });
   
  // GET a bands
  app.get("/api/bands/:id", function(req, res) {
    //console.log(req.user.uid);
    db.Band.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBand) {
      res.json(dbBand);
    });
  });
  
  // CREATE a bands
  app.post("/api/bands", function(req, res) {
    console.log(req.body)
    db.Band.create({
      name: req.body.name,
      description: req.body.description,
      bio: req.body.bio,
      city: req.body.city,
      state: req.body.state
    }).then(dbBand=>res.json(dbBand))
    .catch(err=>res.json(err));
  });

  // UPDATE a band
  app.put("/api/bands/:id", function(req, res) {
    // console.log(req.params.id);
    // console.log(req.body);
    db.Band.update({
      name: req.body.name,
      description: req.body.description,
      bio: req.body.bio,
      city: req.body.city,
      state: req.body.state
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBand) {
      res.json(dbBand);
    });
  });
  
  // DELETE a band
  app.delete("/api/bands/:id", function(req, res) {
    db.Band.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBand) {
      res.json(dbBand);
    });
  });


  //==========================VENUES====================================
  //===================================================================
  // Get all venues
  app.get("/api/venues", function(req, res) {
    //console.log(req.user.uid);
    db.Venue.findAll({})
    .then(function(dbVenue) {
      res.json(dbVenue);
    });
  });
   
  // GET a venue
  app.get("/api/venues/:id", function(req, res) {
    //console.log(req.user.uid);
    db.Venue.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbVenue) {
      res.json(dbVenue);
    });
  });
  
  //CREATE a venue
  app.post("/api/venues", function(req, res) {
    console.log(req.body)
    db.Venue.create({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      street: req.body.street
    }).then(dbVenue=>res.json(dbVenue))
    .catch(err=>res.json(err));
  });
  
  // UPDATE a venue
  app.put("/api/venues/:id", function(req, res) {
    // console.log(req.params.id);
    // console.log(req.body);
    db.Venue.update({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      street: req.body.street
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function(dbVenue) {
      res.json(dbVenue);
    });
  });
  
  // DELETE a venue
  app.delete("/api/venues/:id", function(req, res) {
    db.Venue.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbVenue) {
      res.json(dbVenue);
    });
  });


   //==========================VENUES====================================
  //===================================================================
  
   //==========================VENUES====================================
  //===================================================================
  
   //==========================VENUES====================================
  //===================================================================
  
   //==========================VENUES====================================
  //===================================================================
  

  // GET route for returning all Donations by category
  app.get("/api/donations/:item_categoryID", function(req, res) {
      db.Donation.findAll({
        where: {

          //item_categoryID: 2
          item_categoryID: req.body.item_categoryID,
          //uid: req.user.id

        }
      })
      .then(function(dbDonation) {
        res.json(dbDonation);
      });
    });

    // CREATE a donation
    app.post("/api/donations", function(req, res) {
      db.Donation.create({
        name: req.body.name,
        description: req.body.description,
        uid: req.user.id,
        //uid: 3,
        item_categoryID: req.body.item_categoryID,
        type: req.body.type
      }).then(dbDonation=>res.json(dbDonation))
      // .catch(err=>res.json(err));

    });

    //GET route for retrieving a donation to edit
    app.get("/api/donations/:id", function(req, res) {
      db.Donation.findById({ where: {id: req.params.id} }).then(data=>res.json(data));
    });

    app.get("/api/donations/:id", function(req, res) {
      //console.log(req.params.id);
      //console.log(req.body);
      db.Donation.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbDonation) {
        res.json(dbDonation);
      });
    });

    // PUT route for updating Donation
    app.put("/api/donations/:id", function(req, res) {
      // console.log(req.params.id);
      // console.log(req.body);
      db.Donation.update({
        description: req.body.description,
        name: req.body.name,
        item_categoryID: req.body.item_categoryID
      },
        {
          where: {
            id: req.params.id
          }
        })
      .then(function(dbDonation) {
        res.json(dbDonation);
      });
    });

    // DELETE route for deleting Donation
    app.delete("/api/donations/:id", function(req, res) {
      db.Donation.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbDonation) {
        res.json(dbDonation);
      });
    });

  //=============orgs can search donations by category=================
  //===================================================================
  // GET route for returning all Donations by category
  app.get("/api/donations/item_categoryID/:item_categoryID", function(req, res) {
    db.Donation.findAll({
      where: {
        //item_categoryID: 2
        item_categoryID: req.params.item_categoryID
      }
    })
    .then(function(dbDonation) {
      res.json(dbDonation);
    });
  });

  //=============donors can search requests by category================
  //===================================================================
  // GET route for returning requests of a specific category
  app.get("/api/requests/item_categoryID/:item_categoryID", function(req, res) {
    db.Request.findAll({
      where: {
        //item_categoryID: 2
        item_categoryID: req.params.item_categoryID
      }
    })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });

  //====================Request/Needs CRUD Routes======================
  //===================================================================

   // GET route for returning all Donations of a specific user
   app.get("/api/requests/:uid", function(req, res) {
    db.Request.findAll({
      where: {
        uid: req.user.id
        //uid: 2
      }
    })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });


  // Get route for retrieving a request to edit
  app.get("/api/requests/:id", function(req, res) {
    db.Request.findById(req.params.id).then(data=>res.json(data));
  });


  //CREATE Request
  app.post("/api/requests", function(req, res) {
    db.Request.create({
      name: req.body.name,
      description: req.body.description,
      uid: req.user.uid,
      item_categoryID: req.body.item_categoryID,
      type: req.body.type
    }).then(dbRequest=>res.json(dbRequest))
    //.catch(err=>res.json(err));
  });

  // PUT route for updating request
  app.put("/api/requests/:id", function(req, res) {
    db.Request.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });
  

  // DELETE route for deleting request
  app.delete("/api/requests/:id", function(req, res) {
    db.Request.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });
  

  // get user data

  app.post("/api/users", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      donor: req.body.donor,
      name: req.body.name,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      orgId: req.body.orgId
    }).then(function(err) {
      dbUser=>res.json(dbUser)
      res.redirect(307, "/api/login");
    }).catch(function(err)  {
      console.log(err);
      res.json(err);
    })
  });


    //CREATE ORG
    app.post("/api/orgs", function(req, res) {
      console.log(req.body)
      db.Org.create({
        name: req.body.name,
        description: req.body.description,
        web: req.body.web,
        org_categoryID: req.body.org_categoryID
      }).then(dbOrg=>res.json(dbOrg))
      .catch(err=>res.json(err));
    });

      //Route for logging user out
      app.get("/logout", function(req, res)   {
        req.session.destroy(err => {
          res.redirect("/index");
        });

    });

    // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email
      res.json({
        name: req.user.name,
        street: req.user.street,
        city: req.user.city,
        state: req.user.state,
        email: req.user.email, 
        phone: req.user.phone,
        zip: req.user.zip,
        id: req.user.id
      });
    }
  });
  

}