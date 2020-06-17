class MainScreen extends Phaser.Scene {
    constructor() {
        super("MainScreen");
    }



    preload() {
<<<<<<< Updated upstream
        this.load.spritesheet("floor", "assets/Sprites/Objects/Object_BasicFloor.png", {
            frameWidth: 1080,
            frameHeight: 1000
        });

        this.load.spritesheet("unfixedKitchen", "assets/Sprites/Objects/Object_BasicKitchenSet.png", {
            frameWidth: 1496,
            frameHeight: 905,
        });

        this.load.spritesheet("unfixedWall", "assets/Sprites/Objects/Object_BasicFloor.png", {
            frameWidth: 663,
            frameHeight: 1070
        });

        this.load.spritesheet("unfixedWindow", "assets/Sprites/Objects/Object_BasicWindow.png", {
            frameWidth: 442,
            frameHeight: 380
        });
        this.load.spritesheet("unfixedRangeHood", "assets/Sprites/Objects/Object_BasicRangeHood.png", {
            frameWidth: 522,
            frameHeight: 381
        });
        this.load.spritesheet("unfixedTable", "assets/Sprites/Objects/Object_BasicTable.png", {
            frameWidth: 837,
            frameHeight: 458
        });

        this.load.spritesheet("uiPlay", "assets/UI/UI_PlayButton.png", {
            frameWidth: 151,
            frameHeight: 89
        });
        this.load.spritesheet("uiSC", "assets/UI/UI_SCButton.png", {
            frameWidth: 140,
            frameHeight: 39
        });
        this.load.spritesheet("uiUpgrades", "assets/UI/UI_RepairsButton.png", {
            frameWidth: 68,
            frameHeight: 69
        });
        this.load.spritesheet("uiCraft", "assets/UI/UI_CookingButton.png", {
            frameWidth: 88,
            frameHeight: 89
        });
        this.load.spritesheet("uiMenu", "assets/UI/UI_MenuButton.png", {
            frameWidth: 52,
            frameHeight: 52
        });

        this.load.spritesheet("uiCloseButton", "assets/UI/UI_CloseButton.png", {
            frameWidth: 89,
            frameHeight: 89
        });

        this.load.spritesheet("uiLikes", "assets/UI/UI_LikesIndicator.png", {
            frameWidth: 90,
            frameHeight: 39
        });

        this.load.spritesheet("uiFixUpgrade", "assets/UI/UI_FixUpgrade.png", {
            frameWidth: 778,
            frameHeight: 663
        });

        this.load.spritesheet("fixedTable", "assets/Sprites/Objects/Object_ImprovedBasicTable.png", {
            frameWidth: 858,
            frameHeight: 470
        });

        this.load.spritesheet("fixedKitchen", "assets/Sprites/Objects/Object_ImprovedBasicKitchenSet.png", {
            frameWidth: 1496,
            frameHeight: 905
        });


        this.load.spritesheet("fixedWall", "assets/Sprites/Objects/Object_ImprovedBasicWall.png", {
            frameWidth: 1080,
            frameHeight: 1920
        });

        this.load.spritesheet("fixedWindow", "assets/Sprites/Objects/Object_ImprovedBasicWindow.png", {
            frameWidth: 442,
            frameHeight: 380
        });

        this.load.spritesheet("fixedRangeHood", "assets/Sprites/Objects/Object_ImprovedBasicRangeHood.png", {
            frameWidth: 522,
            frameHeight: 381
        });
        this.load.spritesheet("spinsStub", "assets/Temporary backs for prototype [delete on uselessness]/SpinsStub.png", {
            frameWidth: 1080,
            frameHeight: 1920
        });

        this.load.spritesheet("shopStub", "assets/Temporary backs for prototype [delete on uselessness]/ShopStub.png", {
            frameWidth: 1080,
            frameHeight: 1920
        });

        this.load.spritesheet("uiBackButton", "assets/UI/UI_BackButton.png", {
            frameWidth: 69,
            frameHeight: 71
        });

        this.load.spritesheet("uiMenuBar", "assets/UI/UI_Menu.png", {
            frameWidth: 314,
            frameHeight: 622
        });

        this.load.spritesheet("iconSettings", "assets/Sprites/Icons/Icon_Settings.png", {
            frameWidth: 450,
            frameHeight: 400
        });

        this.load.spritesheet("iconSlotMachine", "assets/Sprites/Icons/Icon_Slot_Machine.png", {
            frameWidth: 512,
            frameHeight: 509
        });

        this.load.spritesheet("iconEnergy", "assets/Sprites/Icons/Icon_Energy.png", {
            frameWidth: 593,
            frameHeight: 413
        });
        this.load.spritesheet("iconFix", "assets/Sprites/Icons/Icon_Challenge.png", {
            frameWidth: 154,
            frameHeight: 209
        });
        this.load.spritesheet("iconAllert", "assets/Sprites/Icons/Icon_Allert.png", {
            frameWidth: 512,
            frameHeight: 512
        });
        this.load.spritesheet("iconDoor", "assets/Sprites/Icons/Icon_Door.png", {
            frameWidth: 256,
            frameHeight: 256
        });
        this.load.spritesheet("iconTrophy", "assets/Sprites/Icons/Icon_Trophy.png", {
            frameWidth: 1200,
            frameHeight: 1200
        });
        this.load.spritesheet("iconFriends", "assets/Sprites/Icons/Icon_Friends.png", {
            frameWidth: 1600,
            frameHeight: 1600
        }); {
            this.load.spritesheet("craftBar", "assets/UI/UI_RecipeUnderlay.png", {
                frameWidth: 231,
                frameHeight: 396
            });

            this.load.spritesheet("leftArrow", "assets/UI/UI_LeftArrowButton.png", {
                frameWidth: 25,
                frameHeight: 60
            });
            this.load.spritesheet("rightArrow", "assets/UI/UI_RightArrowButton.png", {
                frameWidth: 25,
                frameHeight: 60,
            });
            
            this.load.spritesheet("craftNameBar", "assets/UI/UI_RecipeNameUnderlay.png", {
                frameWidth: 267,
                frameHeight: 49
            });
            this.load.spritesheet("buyFoodButton", "assets/UI/UI_BuyFoodButton.png", {
                frameWidth: 118,
                frameHeight: 30
            });
            this.load.spritesheet("boilButton", "assets/UI/UI_BoilButton.png", {
                frameWidth: 118,
                frameHeight: 30
            });
            this.load.spritesheet("plus", "assets/UI/UI_+.png", {
                frameWidth: 37,
                frameHeight: 37
            });
            this.load.spritesheet("equals", "assets/UI/UI_=.png", {
                frameWidth: 37,
                frameHeight: 32
            });
        } // Craft preload

        {
            this.load.spritesheet("Beet", "assets/Sprites/Food/Food_Beet.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Borscht", "assets/Sprites/Food/Food_Borscht.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Cabbage", "assets/Sprites/Food/Food_Cabbage.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("CutBeet", "assets/Sprites/Food/Food_CutBeet.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("CutCabbage", "assets/Sprites/Food/Food_CutCabbage.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("CutPotato", "assets/Sprites/Food/Food_CutPotato.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Dough", "assets/Sprites/Food/Food_Dough.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Flour", "assets/Sprites/Food/Food_Flour.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("FriedPotatoes", "assets/Sprites/Food/Food_FriedPotatoes.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("LingonBerry", "assets/Sprites/Food/Food_LingonBerry.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("LingonberryCompote", "assets/Sprites/Food/Food_LingonberryCompote.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Meat", "assets/Sprites/Food/Food_Meat.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("PirozhkiWithCabbage", "assets/Sprites/Food/Food_PirozhkiWithCabbage.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Potato", "assets/Sprites/Food/Food_Potato.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Salt", "assets/Sprites/Food/Food_Salt.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Sugar", "assets/Sprites/Food/Food_Sugar.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("VegetableOil", "assets/Sprites/Food/Food_VegetableOil.png", {
=======

        {
            this.load.spritesheet("floor", "assets/Objects/Object_BasicFloor.png", {
                frameWidth: config.width,
                frameHeight: config.height / 2,
            });

            this.load.spritesheet("unfixedKitchen", "assets/Objects/Object_BasicKitchenSet.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("unfixedWall", "assets/Objects/Object_BasicWall.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("unfixedWindow", "assets/Objects/Object_BasicWindow.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("unfixedTable", "assets/Objects/Object_BasicTable.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("fixedTable", "assets/Objects/Object_ImprovedBasicTable.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("fixedKitchen", "assets/Objects/Object_ImprovedBasicKitchenSet.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("fixedWall", "assets/Objects/Object_ImprovedBasicWall.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("fixedWindow", "assets/Objects/Object_ImprovedBasicWindow.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
        } // Furniture Preload

        {
            this.load.spritesheet("uiPlay", "assets/UI/UI_PlayButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("uiSC", "assets/UI/UI_SCButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("uiUpgrades", "assets/UI/UI_RepairsButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("uiCraft", "assets/UI/UI_CookingButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("uiMenu", "assets/UI/UI_MenuButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("uiCloseButton", "assets/UI/UI_CloseButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("uiLikes", "assets/UI/UI_LikesIndicator.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("uiFixUpgrade", "assets/UI/UI_FixUpgrade.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

        } // UI Preload

        {
            this.load.spritesheet("spinsBG", "assets/Objects/Object_SpinScreenBackground.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("fridgeDoor", "assets/Objects/Object_FridgeDoor.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("shopStub", "assets/Temporary backs for prototype [delete on uselessness]/ShopStub.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("uiBackButton", "assets/UI/UI_BackButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("spinFridge", "assets/Objects/Object_Fridge.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.image("spinButton", "assets/UI/UI_SpinButton.png");
            this.load.image("pressedSpinButton", "assets/UI/UI_SpinButtonPressed.png");

            this.load.spritesheet("fridgeRear", "assets/Objects/Object_FridgeRear.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("fridgeFrame", "assets/Objects/Object_FridgeFrame.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("fridgeShadow", "assets/Objects/Object_FridgeShadow.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            var atlasJSON = {
                "frames": [
                    {
                        "filename": "SC",
                        "frame": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 177,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 177
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 177
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "energy",
                        "frame": {
                            "x": 0,
                            "y": 177,
                            "w": 177,
                            "h": 177,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 177
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 177
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "gift",
                        "frame": {
                            "x": 0,
                            "y": 354,
                            "w": 177,
                            "h": 177,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 177
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 177
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "tripleSC",
                        "frame": {
                            "x": 0,
                            "y": 531,
                            "w": 177,
                            "h": 177
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 177
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 177
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "challenge",
                        "frame": {
                            "x": 0,
                            "y": 708,
                            "w": 177,
                            "h": 177,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 177
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 177
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    }]
            };

            var atlasBlurredJSON = {
                "frames": [
                    {
                        "filename": "SCB",
                        "frame": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 213,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 213
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 213
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "energyB",
                        "frame": {
                            "x": 0,
                            "y": 213,
                            "w": 177,
                            "h": 213,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 213
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 213
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "giftB",
                        "frame": {
                            "x": 0,
                            "y": 426,
                            "w": 177,
                            "h": 213,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 213
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 213
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "tripleSCB",
                        "frame": {
                            "x": 0,
                            "y": 639,
                            "w": 177,
                            "h": 213
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 213
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 213
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    },
                    {
                        "filename": "challengeB",
                        "frame": {
                            "x": 0,
                            "y": 852,
                            "w": 177,
                            "h": 213,
                        },
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {
                            "x": 0,
                            "y": 0,
                            "w": 177,
                            "h": 213
                        },
                        "sourceSize": {
                            "w": 177,
                            "h": 213
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        }
    }]
            };

            this.load.atlas("randomPrize", "assets/Icons/Icon_SlotsSequence.png", atlasJSON);

            this.load.spritesheet("randomPrizeBlurred", "assets/Icons/Icon_SlotsSequenceDistorted.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("randomPrizeSequence", "assets/Icons/Icon_SlotsSequence (1).png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("energyBar", "assets/UI/UI_EnergyEmptyBar.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });


        } // Spins + Shop Preload

        {
            this.load.spritesheet("uiMenuBar", "assets/UI/UI_Menu.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("iconSettings", "assets/Icons/Icon_Settings.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("iconSlotMachine", "assets/Icons/Icon_Slots.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("iconEnergy", "assets/Icons/Icon_SmallEnergy.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("iconFix", "assets/Icons/Icon_Challenge.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("iconAllert", "assets/Icons/Icon_Sound.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("iconDoor", "assets/Icons/Icon_Levels.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("iconTrophy", "assets/Icons/Icon_Rating.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("iconFriends", "assets/Icons/Icon_CallFriends.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("iconRepair", "assets/Icons/Icon_Repairs.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
        } //Menu Preload

        {
            this.load.spritesheet("craftBar", "assets/UI/UI_RecipeUnderlay.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("leftArrow", "assets/UI/UI_LeftArrowButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("rightArrow", "assets/UI/UI_RightArrowButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });

            this.load.spritesheet("craftNameBar", "assets/UI/UI_RecipeNameUnderlay.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("buyFoodButton", "assets/UI/UI_BuyFoodButton.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("plus", "assets/UI/UI_+.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            this.load.spritesheet("equals", "assets/UI/UI_=.png", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
        } // Craft Preload

        {
            this.load.spritesheet("Beet", "assets/Food/Food_Beet.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Borscht", "assets/Food/Food_Borscht.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Cabbage", "assets/Food/Food_Cabbage.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("CutBeet", "assets/Food/Food_CutBeet.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("CutCabbage", "assets/Food/Food_CutCabbage.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("CutPotato", "assets/Food/Food_CutPotato.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Dough", "assets/Food/Food_Dough.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Flour", "assets/Food/Food_Flour.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("FriedPotatoes", "assets/Food/Food_FriedPotatoes.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("LingonBerry", "assets/Food/Food_LingonBerry.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("LingonberryCompote", "assets/Food/Food_LingonberryCompote.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Meat", "assets/Food/Food_Meat.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("PirozhkiWithCabbage", "assets/Food/Food_Pirozhki with cabbage.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Potato", "assets/Food/Food_Potato.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Salt", "assets/Food/Food_Salt.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Sugar", "assets/Food/Food_Sugar.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("VegetableOil", "assets/Food/Food_VegetableOil.png", {
>>>>>>> Stashed changes
                frameWidth: 500,
                frameHeight: 500
            });

<<<<<<< Updated upstream
            this.load.spritesheet("Water", "assets/Sprites/Food/Food_Water.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Yeast", "assets/Sprites/Food/Food_Yeast.png", {
                frameWidth: 500,
                frameHeight: 500
            });
        } // Food preload
=======
            this.load.spritesheet("Water", "assets/Food/Food_Water.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Yeast", "assets/Food/Food_Yeast.png", {
                frameWidth: 500,
                frameHeight: 500
            });
        } // Food Preload
>>>>>>> Stashed changes
    }


    create() {

        {
            var unfixedWall = this.add.sprite(0, 0, "unfixedWall");
            unfixedWall.setOrigin(0, 0);
<<<<<<< Updated upstream
            unfixedWall.setScale(2);
=======
>>>>>>> Stashed changes

            var fixedWall = this.add.sprite(0, 0, "fixedWall");
            fixedWall.setOrigin(0, 0);
            fixedWall.setActive(false).setVisible(false);

<<<<<<< Updated upstream
            var floor = this.add.sprite(0, 1000, "floor");
            floor.setOrigin(0, 0);

            var unfixedWindow = this.add.sprite(250, 450, "unfixedWindow");

            var fixedWindow = this.add.sprite(250, 450, "fixedWindow");
            fixedWindow.setActive(false).setVisible(false);


            var unfixedRangeHood = this.add.sprite(590, -50, "unfixedRangeHood");
            unfixedRangeHood.setOrigin(0, 0);
            unfixedRangeHood.setScale(1);

            var fixedRangeHood = this.add.sprite(590, -50, "fixedRangeHood");
            fixedRangeHood.setOrigin(0, 0);
            fixedRangeHood.setScale(1);
            fixedRangeHood.setActive(false).setVisible(false);

            var unfixedKitchen = this.add.sprite(-10, 620, "unfixedKitchen");
            unfixedKitchen.setOrigin(0, 0);
            unfixedKitchen.setScale(.73);

            var fixedKitchen = this.add.sprite(-10, 620, "fixedKitchen");
            fixedKitchen.setOrigin(0, 0);
            fixedKitchen.setScale(.73);
            fixedKitchen.setActive(false).setVisible(false);

            var unfixedTable = this.add.sprite(540, 1550, "unfixedTable");
            unfixedTable.setScale(1.7);

            var fixedTable = this.add.sprite(540, 1550, "fixedTable");
            fixedTable.setScale(1.7);
=======
            var floor = this.add.sprite(0, config.height * 0.55, "floor");
            floor.setOrigin(0, 0);

            var unfixedWindow = this.add.sprite(config.width * 0.25, config.height * 0.23, "unfixedWindow");

            var fixedWindow = this.add.sprite(config.width * 0.25, config.height * 0.23, "fixedWindow");
            fixedWindow.setActive(false).setVisible(false);


            var unfixedKitchen = this.add.sprite(0, 0, "unfixedKitchen");
            unfixedKitchen.setOrigin(0, 0);

            var fixedKitchen = this.add.sprite(0, 0, "fixedKitchen");
            fixedKitchen.setOrigin(0, 0);
            fixedKitchen.setActive(false).setVisible(false);

            var unfixedTable = this.add.sprite(config.width * 0.5, config.height * 0.78, "unfixedTable");


            var fixedTable = this.add.sprite(config.width * 0.5, config.height * 0.78, "fixedTable");
>>>>>>> Stashed changes
            fixedTable.setActive(false).setVisible(false);

        } //спавним мебель

        {

<<<<<<< Updated upstream
            var uiSC = this.add.sprite(250, 100, "uiSC");
            uiSC.setScale(3.1);
            uiSC.setInteractive();

            this.goldText = this.add.text(uiSC.x - 60, uiSC.y - 30, gameSettings.currGold, {
=======
            var uiSC = this.add.sprite(config.width * 0.22, config.height * 0.04, "uiSC");
            uiSC.setInteractive();

            var initialSCX = uiSC.x;
            var initialSCY = uiSC.y;

            this.goldText = this.add.text(uiSC.x * 0.7, uiSC.y * 0.55, gameSettings.currGold, {
>>>>>>> Stashed changes
                font: "64px Arial",
                color: "white"
            });

            var goldText0 = this.goldText;

<<<<<<< Updated upstream
            var uiPlay = this.add.sprite(config.width / 2, config.height - 110, "uiPlay");
            uiPlay.setScale(2.7);
            uiPlay.setInteractive();

            var uiMenu = this.add.sprite(config.width - 120, 120, "uiMenu");
            uiMenu.setScale(4);
            uiMenu.setInteractive();

            var uiCraft = this.add.sprite(config.width - 110, config.height - 110, "uiCraft");
            uiCraft.setScale(2.7);
            uiCraft.setInteractive();


            var uiUpgrades = this.physics.add.sprite(130, config.height - 130, "uiUpgrades");
            uiUpgrades.setScale(3.4);
            uiUpgrades.setInteractive();

            var uiCloseButton = this.physics.add.sprite(config.width / 2, config.height - 100, "uiCloseButton");
            uiCloseButton.setScale(3.5);
            uiCloseButton.setInteractive();
            uiCloseButton.setActive(false).setVisible(false);

            var uiLikes = this.add.sprite(config.width * (0.63), 100, "uiLikes");
            uiLikes.setScale(3.1);
            uiLikes.setInteractive();

            var uiBackSpinButton = this.add.sprite(config.width - 110, config.height - 110, "uiBackButton");
            uiBackSpinButton.setScale(3.3);
            uiBackSpinButton.setInteractive();
            uiBackSpinButton.setActive(false).setVisible(false);

            var uiBackShopButton = this.add.sprite(config.width - 110, config.height - 110, "uiBackButton");
            uiBackShopButton.setScale(3.3);
            uiBackShopButton.setInteractive();
            uiBackShopButton.setActive(false).setVisible(false);

            var uiMenuBar = this.add.sprite(config.width - 150, config.height / 2, "uiMenuBar");
=======
            var uiPlay = this.add.sprite(config.width / 2, config.height * 0.93, "uiPlay");
            uiPlay.setInteractive();

            var uiMenu = this.add.sprite(config.width * 0.89, config.height * 0.06, "uiMenu");
            uiMenu.setInteractive();

            var uiCraft = this.add.sprite(config.width * 0.875, config.height * 0.93, "uiCraft");
            uiCraft.setInteractive();


            var uiUpgrades = this.physics.add.sprite(config.width * 0.125, config.height * 0.93, "uiUpgrades");
            uiUpgrades.setInteractive();

            var uiCloseButton = this.physics.add.sprite(config.width / 2, config.height * 0.93, "uiCloseButton");
            uiCloseButton.setInteractive();
            uiCloseButton.setActive(false).setVisible(false);

            var uiLikes = this.add.sprite(config.width * 0.63, config.height * 0.04, "uiLikes");
            uiLikes.setInteractive();

            var uiBackSpinButton = this.add.sprite(config.width * 0.9, config.height * 0.95, "uiBackButton");
            uiBackSpinButton.setInteractive();
            uiBackSpinButton.setActive(false).setVisible(false).setDepth(1.11);

            var uiBackShopButton = this.add.sprite(config.width * 0.9, config.height * 0.95, "uiBackButton");
            uiBackShopButton.setInteractive();
            uiBackShopButton.setActive(false).setVisible(false);

            var uiMenuBar = this.add.sprite(config.width * 0.85, config.height / 2, "uiMenuBar");
>>>>>>> Stashed changes
            uiMenuBar.setScale(3.6);
            uiMenuBar.setInteractive();
            uiMenuBar.setActive(false).setVisible(false);

            var touchBar = this.add.sprite(0, config.height / 2, "uiMenuBar");
            touchBar.setScale(2.6, 4);
            touchBar.setActive(false).setVisible(false);
            touchBar.setInteractive();
        } // спавним UI

        {
<<<<<<< Updated upstream
            var craftBG = this.add.sprite(config.width / 2, config.height / 2 - 100, "uiMenuBar");
            craftBG.setScale(6);

            var craftBar = this.add.sprite(config.width / 2, config.height / 2 + 50, "craftBar");
            craftBar.setScale(4);

            var leftArrow = this.add.sprite(config.width / 18, config.height / 2 + 50, "leftArrow");
            leftArrow.setScale(3).setInteractive();

            var rightArrow = this.add.sprite(config.width * 17 / 18, config.height / 2 + 50, "rightArrow");
            rightArrow.setScale(3).setInteractive();

            var craftNameBar = this.add.sprite(config.width / 2, config.height / 10 + 60, "craftNameBar");
            craftNameBar.setScale(2.8);

            var uiBackCraftButton = this.add.sprite(config.width - 110, config.height - 110, "uiBackButton");
            uiBackCraftButton.setScale(3.3);
            uiBackCraftButton.setInteractive();
            uiBackCraftButton.setActive(false).setVisible(false);

            var craftGroup = this.add.group([craftBar, leftArrow, rightArrow, craftNameBar, craftBG, uiBackCraftButton]);
            craftGroup.setVisible(false);
            
=======
            var craftBG = this.add.sprite(config.width / 2, config.height * 0.45, "uiMenuBar");
            craftBG.setScale(6);

            var craftBar = this.add.sprite(config.width / 2, config.height * 0.51, "craftBar");

            var leftArrow = this.add.sprite(config.width / 18, config.height / 2 + 50, "leftArrow");
            leftArrow.setInteractive();

            var rightArrow = this.add.sprite(config.width * 17 / 18, config.height / 2 + 50, "rightArrow");
            rightArrow.setInteractive();


            var uiBackCraftButton = this.add.sprite(config.width * 0.9, config.height * 0.95, "uiBackButton");
            uiBackCraftButton.setInteractive();
            uiBackCraftButton.setActive(false).setVisible(false);

            var craftGroup = this.add.group([craftBar, leftArrow, rightArrow, craftBG, uiBackCraftButton]);
            craftGroup.setVisible(false);

>>>>>>> Stashed changes
            var recipesArr = [
                ""
            ]
        } // спавним элементы крафта

        {
<<<<<<< Updated upstream
            var spinsStub = this.add.sprite(config.width / 2, config.height / 2, "spinsStub");
            spinsStub.setScale(3);
            spinsStub.setActive(false).setVisible(false);

            var shopStub = this.add.sprite(config.width / 2, config.height / 2, "shopStub");
            shopStub.setScale(3);
            shopStub.setActive(false).setVisible(false);
        } // спавним экраны

        {
            var uiFixUpgrade1 = this.add.sprite(545, 1430, "uiFixUpgrade");
            uiFixUpgrade1.setScale(1);
            uiFixUpgrade1.setInteractive();
            uiFixUpgrade1.setActive(false).setVisible(false);
            var uiText1 = this.add.text(uiFixUpgrade1.x - 50, uiFixUpgrade1.y - 110, 200, {
                font: '80px Arial',
                color: 'brown'
            });
            uiText1.setInteractive();
            uiText1.setActive(false).setVisible(false);

            var uiFixUpgrade2 = this.add.sprite(800, 500, "uiFixUpgrade");
            uiFixUpgrade2.setScale(0.75);
            uiFixUpgrade2.setInteractive();
            uiFixUpgrade2.setActive(false).setVisible(false);
            var uiText2 = this.add.text(uiFixUpgrade2.x - 30, uiFixUpgrade2.y - 90, 150, {
                font: '65px Arial',
                color: 'brown'
            });
            uiText2.setInteractive();
            uiText2.setActive(false).setVisible(false);

            var uiFixUpgrade3 = this.add.sprite(config.width / 2, config.height / 2, "uiFixUpgrade");
            uiFixUpgrade3.setScale(0.75);
            uiFixUpgrade3.setInteractive();
            uiFixUpgrade3.setActive(false).setVisible(false);
            var uiText3 = this.add.text(uiFixUpgrade3.x - 30, uiFixUpgrade3.y - 90, 400, {
                font: '65px Arial',
                color: 'brown'
            });
            uiText3.setInteractive();
            uiText3.setActive(false).setVisible(false);

            var uiFixUpgrade4 = this.add.sprite(unfixedWindow.x, unfixedWindow.y, "uiFixUpgrade");
            uiFixUpgrade4.setScale(0.75);
            uiFixUpgrade4.setInteractive();
            uiFixUpgrade4.setActive(false).setVisible(false);
            var uiText4 = this.add.text(uiFixUpgrade4.x - 30, uiFixUpgrade4.y - 90, 400, {
                font: '65px Arial',
                color: 'brown'
            });
            uiText4.setInteractive();
            uiText4.setActive(false).setVisible(false);


            var uiFixUpgrade5 = this.add.sprite(unfixedRangeHood.x + unfixedRangeHood.width / 2, unfixedRangeHood.y + unfixedRangeHood.height / 2, "uiFixUpgrade");
            uiFixUpgrade5.setScale(0.70);
            uiFixUpgrade5.setInteractive();
            uiFixUpgrade5.setActive(false).setVisible(false);
            var uiText5 = this.add.text(uiFixUpgrade5.x - 30, uiFixUpgrade5.y - 90, 400, {
                font: '50px Arial',
                color: 'brown'
            });
            uiText5.setInteractive();
            uiText5.setActive(false).setVisible(false);
        } //спавним элементы экрана улучшений

        {
            var iconSlotMachine = this.add.sprite(config.width * 0.54, 230, "iconSlotMachine");
            iconSlotMachine.setScale(0.22);
            var playMenuText = this.add.text(config.width * 0.6, 200, "Играть!\n", {
                font: "64px Arial",
                color: "brown"
            });
            var iconEnegry = this.add.sprite(config.width * 0.50, 453, "iconEnergy");
            iconEnegry.setScale(0.32);
            var buyMenuText = this.add.text(config.width * 0.6, 400, "Купить\nмонеты/энергию", {
                font: "55px Arial",
                color: "brown"
            });
            var iconFix = this.add.sprite(config.width * 0.55, 623, "iconFix");
            iconFix.setScale(0.6);
            var fixMenuText = this.add.text(config.width * 0.6, 600, "Ремонт\n", {
                font: "64px Arial",
                color: "brown"
            });
            var iconAllert = this.add.sprite(config.width * 0.55, 830, "iconAllert");
            iconAllert.setScale(0.22);
            var announceMenuText = this.add.text(config.width * 0.6, 800, "Уведомления\n", {
                font: "64px Arial",
                color: "brown"
            });
            var iconDoor = this.add.sprite(config.width * 0.55, 1030, "iconDoor");
            iconDoor.setScale(0.45);
            var levelsMenuText = this.add.text(config.width * 0.6, 1000, "Уровни\n", {
                font: "64px Arial",
                color: "brown"
            });
            var iconTrophy = this.add.sprite(config.width * 0.55, 1230, "iconTrophy");
            iconTrophy.setScale(0.15);
            var ratingMenuText = this.add.text(config.width * 0.6, 1200, "Рейтинг\n", {
                font: "64px Arial",
                color: "brown"
            });
            var iconFriends = this.add.sprite(config.width * 0.55, 1430, "iconFriends");
            iconFriends.setScale(0.08);
            var friendsMenuText = this.add.text(config.width * 0.6, 1400, "Позвать друзей\n", {
                font: "54px Arial",
                color: "brown"
            });
            var iconSettings = this.add.sprite(config.width * 0.54, 1625, "iconSettings");
            iconSettings.setScale(0.3);
            var settingsMenuText = this.add.text(config.width * 0.6, 1600, "Настройки\n", {
                font: "54px Arial",
                color: "brown"
            });
            var groupMenu = this.add.group([iconSlotMachine,
=======
            var spinsBG = this.add.sprite(config.width / 2, config.height / 2, "spinsBG");
            spinsBG.setActive(false).setVisible(false);


            var fridgeRear = this.add.sprite(config.width * 0.48, config.height * 0.555, "fridgeRear");
            fridgeRear.setActive(false).setVisible(false);

            var fridgeShadow = this.add.sprite(config.width / 2, config.height * 0.23, "fridgeShadow");
            fridgeShadow.setActive(false).setVisible(false).setDepth(1.05);

            var fridgeFrame = this.add.sprite(config.width / 2, config.height / 2, "fridgeFrame");
            fridgeFrame.setActive(false).setVisible(false).setDepth(1.07);

            var fridgeDoor = this.add.sprite(config.width * 1.02, config.height * 0.55, "fridgeDoor");
            fridgeDoor.setActive(false).setVisible(false).setInteractive().setDepth(1.08);

            var flag = false;


            this.anims.create({
                key: "pressed",
                frames: [
                    {
                        key: "pressedSpinButton"
                    }
                ],
                repeat: -1
            });
            this.anims.create({
                key: "notPressed",
                frames: [
                    {
                        key: "spinButton"
                    }
                ],
                repeat: -1
            });


            var spinButton = this.add.sprite(config.width / 2, config.height * 0.9, "spinButton");
            spinButton.setActive(false).setVisible(false).setFrame(0).setDepth(1.1);

            var energyBar = this.add.sprite(config.width * 0.47, config.height * 0.77, "energyBar");
            energyBar.setActive(false).setVisible(false).setDepth(1.1);

            var energyIcon = this.add.sprite(config.width * 0.42, config.height * 0.765, "iconEnergy");
            energyIcon.setScale(0.6).setActive(false).setVisible(false).setDepth(1.1);

            this.energyText = this.add.text(energyBar.x, energyBar.y * 0.97, gameSettings.currEnergy, {
                font: "64px Arial",
                color: "purple"
            });


            var energyText0 = this.energyText;
            energyText0.setInteractive();
            energyText0.setActive(false).setVisible(false).setDepth(1.1);
            var firstRowParameter, secondRowParameter, thirdRowParameter;

            var firstSlot1 = this.add.sprite(config.width * 0.27, config.height * 0.2, "randomPrize", "SC");
            firstSlot1.setActive(false).setVisible(false);
            var secondSlot1 = this.add.sprite(config.width * 0.27, config.height * 0.2, "randomPrize", "challenge");
            secondSlot1.setActive(false).setVisible(false);
            var thirdSlot1 = this.add.sprite(config.width * 0.27, config.height * 0.2, "randomPrize", "challenge");
            thirdSlot1.setActive(false).setVisible(false);

            var firstSlot2 = this.add.sprite(config.width * 0.45, config.height * 0.2, "randomPrize", "SC");
            firstSlot2.setActive(false).setVisible(false);
            var secondSlot2 = this.add.sprite(config.width * 0.45, config.height * 0.2, "randomPrize", "challenge");
            secondSlot2.setActive(false).setVisible(false);
            var thirdSlot2 = this.add.sprite(config.width * 0.45, config.height * 0.2, "randomPrize", "challenge");
            thirdSlot2.setActive(false).setVisible(false);

            var firstSlot3 = this.add.sprite(config.width * 0.63, config.height * 0.2, "randomPrize", "SC");
            firstSlot3.setActive(false).setVisible(false);
            var secondSlot3 = this.add.sprite(config.width * 0.63, config.height * 0.2, "randomPrize", "challenge");
            secondSlot3.setActive(false).setVisible(false);
            var thirdSlot3 = this.add.sprite(config.width * 0.63, config.height * 0.2, "randomPrize", "challenge");
            thirdSlot3.setActive(false).setVisible(false);


            var firstSlotB1 = this.add.sprite(config.width * 0.27, config.height * 0.01, "randomPrizeSequence");
            firstSlotB1.setActive(false).setVisible(false);
            var secondSlotB1 = this.add.sprite(config.width * 0.27, config.height * 0.01, "randomPrizeSequence");
            secondSlotB1.setActive(false).setVisible(false);

            var firstSlotB2 = this.add.sprite(config.width * 0.45, config.height * 0.01, "randomPrizeSequence");
            firstSlotB2.setActive(false).setVisible(false);
            var secondSlotB2 = this.add.sprite(config.width * 0.45, config.height * 0.01, "randomPrizeSequence");
            secondSlotB2.setActive(false).setVisible(false);

            var firstSlotB3 = this.add.sprite(config.width * 0.63, config.height * 0.01, "randomPrizeSequence");
            firstSlotB3.setActive(false).setVisible(false);
            var secondSlotB3 = this.add.sprite(config.width * 0.63, config.height * 0.01, "randomPrizeSequence");
            secondSlotB3.setActive(false).setVisible(false);


            var firstSlotTimeLine = this.tweens.createTimeline();
            var secondSlotTimeLine = this.tweens.createTimeline();
            var thirdSlotTimeLine = this.tweens.createTimeline();

            firstSlotTimeLine.add({
                paused: true,
                delay: 200,
                targets: firstSlotB1,
                ease: 'Linear',
                duration: 10000,
                offset: 0,
                repeat: 1,
            });

            secondSlotTimeLine.add({
                paused: true,
                delay: 600,
                targets: firstSlotB2,
                y: config.height * 1.25,
                ease: 'Linear',
                duration: 1000,
                offset: 0,
                repeat: 1,
            });

            thirdSlotTimeLine.add({
                paused: true,
                delay: 1000,
                targets: firstSlotB3,
                y: config.height * 1.25,
                ease: 'Linear',
                duration: 1000,
                offset: 0,
                repeat: 1,
            });

            firstSlotTimeLine.add({
                paused: true,
                delay: 700,
                targets: secondSlotB1,
                y: config.height * 1.25,
                ease: 'Linear',
                duration: 1000,
                offset: 0,
                repeat: 1,
            });

            secondSlotTimeLine.add({
                paused: true,
                delay: 1100,
                targets: secondSlotB2,
                y: config.height * 1.25,
                ease: 'Linear',
                duration: 1000,
                offset: 0,
                repeat: 1,
            })

            thirdSlotTimeLine.add({
                paused: true,
                delay: 1500,
                targets: secondSlotB3,
                y: config.height * 1.25,
                ease: 'Linear',
                duration: 1000,
                offset: 0,
                repeat: 1,
            });

            firstSlotTimeLine.add({
                paused: true,
                targets: thirdSlot1,
                onStart: randomFrame(firstSlot1, secondSlot1, thirdSlot1, firstRowParameter),
                y: config.height * 0.65,
                ease: 'Linear',
                duration: 300,
                offset: "-=500",
                repeat: 0,
            });


            secondSlotTimeLine.add({
                paused: true,
                targets: thirdSlot2,
                onStart: randomFrame(firstSlot2, secondSlot2, thirdSlot2, secondRowParameter),
                y: config.height * 0.65,
                ease: 'Linear',
                duration: 300,
                offset: "-=500",
                repeat: 0
            });

            thirdSlotTimeLine.add({
                paused: true,
                targets: thirdSlot3,
                onStart: randomFrame(firstSlot3, secondSlot3, thirdSlot3, thirdRowParameter),
                y: config.height * 0.65,
                ease: 'Linear',
                duration: 300,
                offset: "-=500",
                repeat: 0
            });

            firstSlotTimeLine.add({
                paused: true,
                targets: secondSlot1,
                y: config.height * 0.53,
                ease: 'Linear',
                duration: 244.615,
                offset: "-=100",
                repeat: 0,
            });


            secondSlotTimeLine.add({
                paused: true,
                targets: secondSlot2,
                y: config.height * 0.53,
                ease: 'Linear',
                duration: 244.615,
                offset: "-=100",
                repeat: 0,
            });

            thirdSlotTimeLine.add({
                paused: true,
                targets: secondSlot3,
                y: config.height * 0.53,
                ease: 'Linear',
                duration: 244.615,
                offset: "-=100",
                repeat: 0,
            });

            firstSlotTimeLine.add({
                paused: true,
                targets: firstSlot1,
                y: config.height * 0.4,
                ease: 'Linear',
                duration: 184.615,
                offset: "-=150",
                repeat: 0,
            });


            secondSlotTimeLine.add({
                paused: true,
                targets: firstSlot2,
                y: config.height * 0.4,
                ease: 'Linear',
                duration: 184.615,
                offset: "-=150",
                repeat: 0,
            });

            thirdSlotTimeLine.add({
                paused: true,
                targets: firstSlot3,
                y: config.height * 0.4,
                ease: 'Linear',
                duration: 184.615,
                offset: "-=150",
                repeat: 0,
            });


            function randomFrame(firstSlot, secondSlot, thirdSlot, argument) {
                let a = Math.random();
                if (a < 0.15) {
                    firstSlot.setFrame("energy");
                    secondSlot.setFrame("gift");
                    argument = "gift";
                    thirdSlot.setFrame("tripleSC");
                } else if (a < 0.5) {
                    firstSlot.setFrame("challenge");
                    secondSlot.setFrame("SC");
                    argument = "SC";
                    thirdSlot.setFrame("energy");

                } else if (a < 0.67) {
                    firstSlot.setFrame("gift");
                    secondSlot.setFrame("tripleSC");
                    argument = "tripleSC";
                    thirdSlot.setFrame("challenge");
                } else if (a < 0.75) {
                    firstSlot.setFrame("SC");
                    secondSlot.setFrame("energy");
                    argument = "energy";
                    thirdSlot.setFrame("gift");
                } else {
                    firstSlot.setFrame("tripleSC");
                    secondSlot.setFrame("challenge");
                    argument = "challenge";
                    thirdSlot.setFrame("SC");
                };
            };
            var shopStub = this.add.sprite(config.width / 2, config.height / 2, "shopStub");
            shopStub.setScale(3);
            shopStub.setActive(false).setVisible(false);



            var spinGroup = this.add.group([spinsBG, fridgeRear, fridgeFrame, fridgeShadow, fridgeDoor, spinButton, energyBar, energyIcon, energyText0, firstSlot1, secondSlot1, thirdSlot1, firstSlot2, secondSlot2, thirdSlot2,firstSlot3, secondSlot3, thirdSlot3, firstSlotB1, secondSlotB1, firstSlotB2, secondSlotB2, firstSlotB3, secondSlotB3]);

        } // спавним экраны

        {

            var uiFixUpgradeGeneral = this.add.sprite(config.width*0.5, config.height*0.72, "uiFixUpgrade");
            var uiFixUpgradeScale = 1.2;
            uiFixUpgradeGeneral.setScale(uiFixUpgradeScale).setInteractive().setActive(false).setVisible(false);
            var uiTextGeneral = this.add.text(uiFixUpgradeGeneral.x+24*uiFixUpgradeScale, uiFixUpgradeGeneral.y-76*uiFixUpgradeScale, 0, {
                font: '108px Arial',
                color: 'brown'
            });
            uiTextGeneral.setInteractive().setActive(false).setVisible(false);
            uiTextGeneral.setOrigin(0.5, 0.5);

        } //спавним элементы экрана улучшений

        {
            var iconSlotMachine = this.add.sprite(config.width * 0.55, 230, "iconSlotMachine");
            var playMenuText = this.add.text(config.width * 0.6, 200, "Играть!", {
                font: "64px Comic Sans",
                color: "brown"
            });
            var iconEnegry = this.add.sprite(config.width * 0.55, 453, "iconEnergy");
            var buyMenuText = this.add.text(config.width * 0.6, 400, "Купить\nмонеты/энергию", {
                font: "64px ui-rounded",
                color: "brown"
            });
            var iconFix = this.add.sprite(config.width * 0.55, 623, "iconRepair");
            var fixMenuText = this.add.text(config.width * 0.6, 600, "Ремонт", {
                font: "64px ui-rounded",
                color: "brown"
            });
            var iconAllert = this.add.sprite(config.width * 0.55, 830, "iconAllert");
            var announceMenuText = this.add.text(config.width * 0.6, 800, "Уведомления\n", {
                font: "64px ui-rounded",
                color: "brown"
            });
            var iconDoor = this.add.sprite(config.width * 0.55, 1030, "iconDoor");
            var levelsMenuText = this.add.text(config.width * 0.6, 1000, "Уровни\n", {
                font: "64px ui-rounded",
                color: "brown"
            });
            var iconTrophy = this.add.sprite(config.width * 0.55, 1230, "iconTrophy");
            var ratingMenuText = this.add.text(config.width * 0.6, 1200, "Рейтинг\n", {
                font: "64px ui-rounded",
                color: "brown"
            });
            var iconFriends = this.add.sprite(config.width * 0.55, 1430, "iconFriends");
            var friendsMenuText = this.add.text(config.width * 0.6, 1400, "Позвать друзей\n", {
                font: "64px ui-rounded",
                color: "brown"
            });
            var iconSettings = this.add.sprite(config.width * 0.55, 1625, "iconSettings");
            var settingsMenuText = this.add.text(config.width * 0.6, 1600, "Настройки\n", {
                font: "64px ui-rounded",
                color: "brown"
            });
            var menu = this.add.group([iconSlotMachine,
>>>>>>> Stashed changes
                                            playMenuText,
                                            iconEnegry,
                                            buyMenuText,
                                            iconFix,
                                            fixMenuText,
                                            iconAllert,
                                            announceMenuText,
                                            iconDoor,
                                            levelsMenuText,
                                            iconTrophy,
                                            ratingMenuText,
                                            iconFriends,
                                            friendsMenuText,
                                            iconSettings,
                                            settingsMenuText
                                            ]);
<<<<<<< Updated upstream
            groupMenu.setVisible(false);
            groupMenu.getChildren().forEach(setAllInteractive);
=======
            menu.setVisible(false);
            menu.getChildren().forEach(setAllInteractive);
>>>>>>> Stashed changes

            function setAllInteractive(element, index) {
                element.setInteractive();
            }
        } // спавним элементы меню


        {
<<<<<<< Updated upstream
=======
            var downX, upX, downY, upY, threshold = 50;

            fridgeDoor.on('pointerdown', function (pointer) {
                downX = pointer.x;
                downY = pointer.y;
                flag = true
            });

            spinsBG.on('pointerup', function (pointer) {
                if (flag) {
                    upX = pointer.x;
                    upY = pointer.y;
                    if (upX < downX - threshold) {
                        roll();
                    };
                }
            });

            var firstClick = false;

            spinButton.on("pointerdown", function pressed() {
                firstClick = true;
                spinButton.play("pressed");
            });

            spinButton.setInteractive().on("pointerup", function notPressed() {
                spinButton.play("notPressed");
                if (firstClick) {
                    roll();
                }
            });

            function roll() {
                if (gameSettings.currEnergy > 0) {
                    gameSettings.currEnergy--;
                    firstSlotTimeLine.play();
                    secondSlotTimeLine.play();
                    thirdSlotTimeLine.play();
                }
            }

        } // взаимодействия на экране спинов

        {
            var FixObjects = {
                "CurrentObject" : false,
                "Costs" : {
                    "Table" : 100,
                    "Wall" : 200,
                    "Kitchen" : 300,
                    "Window" : 400,
                },
                "AreFixed" : {
                    "Table" : false,
                    "Wall" : false,
                    "Kitchen" : false,
                    "Window" : false,
                },
                "UnfixedObjects" : {
                    "Table" : unfixedTable,
                    "Wall" : unfixedWall,
                    "Kitchen" : unfixedKitchen,
                    "Window" : unfixedWindow,
                },
                "FixedObjects" : {
                    "Table" : fixedTable,
                    "Wall" : fixedWall,
                    "Kitchen" : fixedKitchen,
                    "Window" : fixedWindow,
                }
            }; // для взаимодействия с объектами кухни
            function getNextCost(text){
                var cost=-1;
                for(var object in FixObjects["Costs"]){
                    if(!FixObjects["AreFixed"][object]){
                        cost = FixObjects["Costs"][object];
                        FixObjects["CurrentObject"] = object;
                        break;
                    }
                }
                text.setText(cost);
            } // получаем цену первого сломанного объекта и сохраняем этот объект в FixObjects

        } // объекты кухни
          
        {
>>>>>>> Stashed changes
            function closeUI() {
                uiCraft.setActive(false).setVisible(false);
                uiUpgrades.setActive(false).setVisible(false);
                uiPlay.setActive(false).setVisible(false);
                uiMenu.setActive(false).setVisible(false);
                uiLikes.setActive(false).setVisible(false);
<<<<<<< Updated upstream
                groupMenu.setVisible(false).setVisible(false);
=======
                menu.setVisible(false).setVisible(false);
>>>>>>> Stashed changes
                uiMenuBar.setActive(false).setVisible(false);
            };

            function openUI() {
                uiCraft.setActive(true).setVisible(true);
                uiUpgrades.setActive(true).setVisible(true);
                uiCloseButton.setActive(false).setVisible(false);
                uiPlay.setActive(true).setVisible(true);
                uiMenu.setActive(true).setVisible(true);
                uiLikes.setActive(true).setVisible(true);
            }

            function closeOrOpenUpgrades(sign) {
<<<<<<< Updated upstream
                uiFixUpgrade1.setActive(sign).setVisible(sign);
                uiText1.setActive(sign).setVisible(sign);
                uiFixUpgrade2.setActive(sign).setVisible(sign);
                uiText2.setActive(sign).setVisible(sign);
                uiFixUpgrade3.setActive(sign).setVisible(sign);
                uiText3.setActive(sign).setVisible(sign);
                uiFixUpgrade4.setActive(sign).setVisible(sign);
                uiText4.setActive(sign).setVisible(sign);
                uiFixUpgrade5.setActive(sign).setVisible(sign);
                uiText5.setActive(sign).setVisible(sign);
            }
            uiCloseButton.on('pointerdown', function moveToMain() {
=======
                getNextCost(uiTextGeneral);
                if(uiTextGeneral.text!='-1'){
                    uiFixUpgradeGeneral.setActive(sign).setVisible(sign);
                    uiTextGeneral.setActive(sign).setVisible(sign);
                }
            } // перед показом корректируем цену


            uiCloseButton.on("pointerdown", function moveToMain() {
>>>>>>> Stashed changes
                openUI();
                closeOrOpenUpgrades(false);
            }); // если нажат крест, переходим на главный экран

<<<<<<< Updated upstream
            uiUpgrades.on('pointerdown', function moveToUpgrade() {
=======
            uiUpgrades.on("pointerdown", function moveToUpgrade() {
>>>>>>> Stashed changes
                closeUI();
                uiCloseButton.setActive(true).setVisible(true);
                closeOrOpenUpgrades(true);
            }); //если нажимаем апргейд, переходим на экран апргрейдов

<<<<<<< Updated upstream
            uiPlay.on('pointerdown', function openSpins() {
                spinsStub.setActive(true).setVisible(true);
                uiBackSpinButton.setActive(true).setVisible(true);
                spinsStub.setDepth(2);
                uiBackSpinButton.setDepth(2.1);
                closeUI();
            }); //если нажимаем кнопку "play", то открываются спины

            uiMenu.on('pointerdown', function openMenu() {
=======
            uiPlay.on("pointerdown", function openSpins() {

                spinsBG.setInteractive();
                spinsBG.setActive(true).setVisible(true);
                uiBackSpinButton.setActive(true).setVisible(true).setDepth(1.1);
                uiSC.setActive(true).setVisible(true);

                spinGroup.getChildren().forEach(setAllVisible);

                function setAllVisible(element, index) {
                    element.setActive(true).setVisible(true);
                }
                goldText0.setActive(true).setVisible(true).setDepth(1.11).setX(config.width / 2 * 0.90).setY(uiSC.y * 1.1);
                uiSC.setX(config.width / 2).setY(config.height * 0.06).setDepth(1.1);
                closeUI();
            }); //если нажимаем кнопку "play", то открываются спины



            uiMenu.on("pointerdown", function openMenu() {
>>>>>>> Stashed changes
                closeUI();
                uiMenuBar.setActive(true).setVisible(true);
                uiLikes.setActive(false).setVisible(false);
                uiSC.setActive(false).setVisible(false);
<<<<<<< Updated upstream
                goldText0
                    .setActive(false).setVisible(false);
                touchBar.setActive(true).setVisible(true);
                touchBar.setAlpha(0.000000001);
                groupMenu.setVisible(true);
            }); //при нажатии на кнопку меню - открываем меню

            touchBar.on('pointerdown', function closeMenu() {
=======
                goldText0.setActive(false).setVisible(false);
                touchBar.setActive(true).setVisible(true).setAlpha(0.000000001);
                menu.setVisible(true);
            }); //при нажатии на кнопку меню - открываем меню

            touchBar.on("pointerdown", function closeMenu() {
>>>>>>> Stashed changes
                uiMenuBar.setActive(false).setVisible(false);
                openUI();
                uiSC.setActive(true).setVisible(true);
                goldText0
                    .setActive(true).setVisible(true);
                touchBar.setActive(false).setVisible(false);
<<<<<<< Updated upstream
                groupMenu.setVisible(false);
            }); //при нажатии на любое место вне меню - выходим из меню

            uiBackSpinButton.on('pointerdown', function closeSpinsAndShop() {
                spinsStub.setActive(false).setVisible(false);
                uiBackSpinButton.setActive(false).setVisible(false);
                openUI();
            }); // при нажатии на кнопку назад - закрываем либо спины, либо магащин

            uiSC.on('pointerdown', function openShop() {
=======
                menu.setVisible(false);
            }); //при нажатии на любое место вне меню - выходим из меню

            uiBackSpinButton.on("pointerdown", function closeSpinsAndShop() {
                firstClick = false;
                spinsBG.setActive(false).setVisible(false);
                uiBackSpinButton.setActive(false).setVisible(false);
                uiSC.setX(initialSCX).setY(initialSCY);
                goldText0.setX(uiSC.x * 0.7).setY(uiSC.y * 0.55);
                spinGroup.getChildren().forEach(setAllVisible);

                function setAllVisible(element, index) {
                    element.setActive(false).setVisible(false);
                }
                openUI();
            }); // при нажатии на кнопку назад - закрываем либо спины, либо магащин

            uiSC.on("pointerdown", function openShop() {
>>>>>>> Stashed changes
                shopStub.setActive(true).setVisible(true);
                shopStub.setDepth(4);
                uiBackShopButton.setActive(true).setVisible(true);
                uiBackShopButton.setDepth(5);
            }); // при нажатии на голду открываем заглушку

<<<<<<< Updated upstream
            uiBackShopButton.on('pointerdown', function closeShop() {
=======
            uiBackShopButton.on("pointerdown", function closeShop() {
>>>>>>> Stashed changes
                shopStub.setActive(false).setVisible(false);
                uiBackShopButton.setActive(false).setVisible(false);
            });

            {
<<<<<<< Updated upstream
                uiFixUpgrade1.on('pointerdown', function upgradeTable() {
                    upgradeSmth(unfixedTable, fixedTable, uiFixUpgrade1, uiText1);
                });

                uiFixUpgrade2.on('pointerdown', function upgradeWall() {
                    upgradeSmth(unfixedWall, fixedWall, uiFixUpgrade2, uiText2);
                });

                uiFixUpgrade3.on('pointerdown', function upgradeKitchen() {
                    upgradeSmth(unfixedKitchen, fixedKitchen, uiFixUpgrade3, uiText3);
                });

                uiFixUpgrade4.on('pointerdown', function upgradeWindow() {
                    upgradeSmth(unfixedWindow, fixedWindow, uiFixUpgrade4, uiText4);
                });

                uiFixUpgrade5.on('pointerdown', function upgradeRangeHood() {
                    upgradeSmth(unfixedRangeHood, fixedRangeHood, uiFixUpgrade5, uiText5);
                })

                function upgradeSmth(element, newElement, upgradeBar, upgradeText) {
                    element.destroy();
                    newElement.setActive(true).setVisible(true);
                    upgradeBar.destroy();
                    gameSettings.currGold -= upgradeText.text;
                    upgradeText.destroy();
                } // функция улучшающая элемент
            } // взаимодействия на экране апгрейдов

            {
                fixMenuText.on('pointerdown', function openMenu() {
                    uiCloseButton.setActive(true).setVisible(true);
                    touchBar.setActive(false).setVisible(false);
                    closeUI();
                    groupMenu.setVisible(false).setVisible(false);
=======
                uiFixUpgradeGeneral.on("pointerdown", function upgradeCurrObject() {
                    var currObj = FixObjects["CurrentObject"];
                    upgradeSmth(FixObjects["UnfixedObjects"][currObj], 
                                FixObjects["FixedObjects"][currObj],
                                uiFixUpgradeGeneral, uiTextGeneral);
                });

                function upgradeSmth(element, newElement, upgradeBar, upgradeText) {
                    element.destroy();
                    newElement.setActive(true).setVisible(true);
                    
                    goldOperation(-upgradeText.text);

                    FixObjects["AreFixed"][FixObjects["CurrentObject"]]=true;
                    getNextCost(upgradeText);
                    if(upgradeText.text=='-1'){
                        upgradeBar.destroy();
                        upgradeText.destroy();
                    }  
                } // функция улучшающая элемент
                function goldOperation(sum){
                    gameSettings.currGold+=sum;
                }
            } // взаимодействия на экране апгрейдов

            {
                fixMenuText.on("pointerdown", function openMenu() {
                    uiCloseButton.setActive(true).setVisible(true);
                    touchBar.setActive(false).setVisible(false);
                    closeUI();
                    menu.setVisible(false).setVisible(false);
>>>>>>> Stashed changes
                    uiMenuBar.setActive(false).setVisible(false);
                    uiSC.setActive(true).setVisible(true);
                    goldText0
                        .setActive(true).setVisible(true);

                    closeOrOpenUpgrades(true);
                }); // при нажатии на Ремонт в меню переходим в ремонт

<<<<<<< Updated upstream
                buyMenuText.on('pointerdown', function openShop() {
=======
                buyMenuText.on("pointerdown", function openShop() {
>>>>>>> Stashed changes
                    shopStub.setActive(true).setVisible(true);
                    uiBackShopButton.setActive(true).setVisible(true);
                    shopStub.setDepth(4);
                    uiBackShopButton.setDepth(5);
<<<<<<< Updated upstream
                }); // При нажатии на купить переходим в покупку 

                playMenuText.on('pointerdown', function openSpins() {
=======
                }); // При нажатии на купить переходим в покупку

                playMenuText.on("pointerdown", function openSpins() {
>>>>>>> Stashed changes
                    spinsStub.setActive(true).setVisible(true);
                    spinsStub.setDepth(2);
                    uiBackSpinButton.setActive(true).setVisible(true);
                    uiBackSpinButton.setDepth(2);
                    closeMenuActions();
                }) // При нажатии на "Играть" в меню переходим в слот машину
                function closeMenuActions() {
                    closeUI();
                    uiSC.setActive(true).setVisible(true);
                    uiMenuBar.setActive(false).setVisible(false);
                    goldText0
                        .setActive(true).setVisible(true);
<<<<<<< Updated upstream
                    groupMenu.setVisible(false);
=======
                    menu.setVisible(false);
>>>>>>> Stashed changes
                }
            } // взаимодействия на экране меню

            {
<<<<<<< Updated upstream
                uiCraft.on('pointerdown', function openCraft() {
=======
                uiCraft.on("pointerdown", function openCraft() {
>>>>>>> Stashed changes
                    craftGroup.setVisible(true);
                    closeUI();
                    uiSC.setDepth(1);
                    goldText0
                        .setDepth(1.1);
                    uiSC.setX(uiSC.x + 280);
                    goldText0
                        .setX(goldText0
                            .x + 280);
                });

<<<<<<< Updated upstream
                uiBackCraftButton.on('pointerdown', function closeCraft() {
=======
                uiBackCraftButton.on("pointerdown", function closeCraft() {
>>>>>>> Stashed changes
                    openUI();
                    craftGroup.setVisible(false);
                    uiSC.setX(uiSC.x - 280);
                    goldText0
                        .setX(goldText0
                            .x - 280);
                });
            } // взаимодействия на экране крафтов

        } // взаимодействия объектов
    }


    update() {
        this.goldText.setText(gameSettings.currGold);
<<<<<<< Updated upstream
=======
        this.energyText.setText(gameSettings.currEnergy);
>>>>>>> Stashed changes
    }
}
