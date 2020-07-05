class MainScreen extends Phaser.Scene {
    constructor() {
        super("MainScreen");
    }



    preload() {

        {
            var urlPlugin;
            urlPlugin = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexscrollerplugin.min.js';
            this.load.plugin('rexscrollerplugin', urlPlugin, true);

            this.load.spritesheet("floor", "assets/Objects/Object_BasicFloor.png", {
                frameWidth: 1080,
                frameHeight: 734,
            });

            this.load.spritesheet("unfixedKitchen", "assets/Objects/Object_BasicKitchenSet.png", {
                frameWidth: 1080,
                frameHeight: 1245,
            });

            this.load.spritesheet("unfixedWall", "assets/Objects/Object_BasicWall.png", {
                frameWidth: 1080,
                frameHeight: 1186,
            });

            this.load.spritesheet("unfixedWindow", "assets/Objects/Object_BasicWindow.png", {
                frameWidth: 509,
                frameHeight: 397,
            });
            this.load.spritesheet("unfixedTable", "assets/Objects/Object_BasicTable.png", {
                frameWidth: 1080,
                frameHeight: 847,
            });
            this.load.spritesheet("fixedTable", "assets/Objects/Object_ImprovedBasicTable.png", {
                frameWidth: 1080,
                frameHeight: 847,
            });

            this.load.spritesheet("fixedKitchen", "assets/Objects/Object_ImprovedBasicKitchenSet.png", {
                frameWidth: 1080,
                frameHeight: 1245,
            });

            this.load.spritesheet("fixedWall", "assets/Objects/Object_ImprovedBasicWall.png", {
                frameWidth: 1080,
                frameHeight: 1186,
            });

            this.load.spritesheet("fixedWindow", "assets/Objects/Object_ImprovedBasicWindow.png", {
                frameWidth: 509,
                frameHeight: 397,
            });

            this.load.spritesheet("building", "assets/Anim/Anim_Building/Anim_Building.png", {
                frameWidth: 360,
                frameHeight: 360
            });
        } // Furniture Preload

        {
            this.load.spritesheet("uiPlay", "assets/UI/UI_PlayButton.png", {
                frameWidth: 436,
                frameHeight: 255,
            });
            this.load.spritesheet("uiSC", "assets/UI/UI_SCButton.png", {
                frameWidth: 433,
                frameHeight: 121,
            });
            this.load.spritesheet("uiUpgrades", "assets/UI/UI_RepairsButton.png", {
                frameWidth: 255,
                frameHeight: 255,
            });
            this.load.spritesheet("uiCraft", "assets/UI/UI_CookingButton.png", {
                frameWidth: 255,
                frameHeight: 255,
            });
            this.load.spritesheet("uiMenu", "assets/UI/UI_MenuButton.png", {
                frameWidth: 208,
                frameHeight: 208,
            });

            this.load.spritesheet("uiCloseButton", "assets/UI/UI_CloseButton.png", {
                frameWidth: 255,
                frameHeight: 255,
            });

            this.load.spritesheet("uiLikes", "assets/UI/UI_LikesIndicator.png", {
                frameWidth: 280,
                frameHeight: 121,
            });

            this.load.spritesheet("uiFixUpgrade", "assets/UI/UI_FixUpgrade.png", {
                frameWidth: 518,
                frameHeight: 397,
            });

            this.load.spritesheet("uiGift", "assets/Icons/Icon_MediumGift.png", {
                frameWidth: 177,
                frameHeight: 177,
            });

            this.load.spritesheet("uiNotificationsCounter", "assets/UI/UI_NotificationsCounter.png", {
                frameWidth: 76,
                frameHeight: 76,
            });

            this.load.spritesheet("uiNotification", "assets/UI/UI_NotificationsUnderlay.png", {
                frameWidth: 899,
                frameHeight: 1382,
            });

            this.load.spritesheet("uiGift", "assets/Icons/Icon_MediumGift.png", {
                frameWidth: 177,
                frameHeight: 177,
            });
            this.load.spritesheet("uiEnergyBar", "assets/UI/UI_EnergyIndicator.png", {
                frameWidth: 267,
                frameHeight: 121,
            });

            this.load.spritesheet("uiFriendNotification", "assets/UI/UI_FriendNotificationUnderlay.png", {
                frameWidth: 776,
                frameHeight: 177
            });

            this.load.spritesheet("uiGiftCollect", "assets/UI/UI_NotificationCollectButton.png", {
                frameWidth: 231,
                frameHeight: 104
            })

        } // UI Preload

        {
            this.load.spritesheet("spinsBG", "assets/Objects/Object_SpinScreenBackground.png", {
                frameWidth: 1098,
                frameHeight: 1936,
            });

            this.load.spritesheet("fridgeDoor", "assets/Objects/Object_FridgeDoor.png", {
                frameWidth: 434,
                frameHeight: 1707,
            });

            this.load.spritesheet("uiBackButton", "assets/UI/UI_BackButton.png", {
                frameWidth: 233,
                frameHeight: 233,
            });

            this.load.image("spinButton", "assets/UI/UI_SpinButton.png");
            this.load.image("pressedSpinButton", "assets/UI/UI_PressedSpinButton.png");

            this.load.spritesheet("fridgeRear", "assets/Objects/Object_FridgeRear.png", {
                frameWidth: 900,
                frameHeight: 1713,
            });

            this.load.spritesheet("fridgeFrame", "assets/Objects/Object_FridgeFrame1.png", {
                frameWidth: 1080,
                frameHeight: 1920,
            });
            this.load.spritesheet("fridgeShadow", "assets/Objects/Object_FridgeShadow.png", {
                frameWidth: 828,
                frameHeight: 400,
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

            this.load.atlas("randomPrize", "assets/Icons/Icon_SlotsSequence.png", atlasJSON);

            this.load.spritesheet("randomPrizeBlurred", "assets/Icons/Icon_SlotsSequenceDistorted.png", {
                frameWidth: 177,
                frameHeight: 1215,
            });

            this.load.spritesheet("randomPrizeSequence", "assets/Icons/Icon_SlotsSequence (1).png", {
                frameWidth: 177,
                frameHeight: 1215,
            });

            this.load.spritesheet("energyBar", "assets/UI/UI_EnergyEmptyBar.png", {
                frameWidth: 344,
                frameHeight: 71,
            });

            this.load.spritesheet("slammingFridgeDoor", "assets/Anim/Anim_SlammingFridgeDoor/Anim_SlammingFridgeDoor2.png", {
                frameWidth: 1282,
                frameHeight: 1800,
            });


        } // Spins + Shop Preload

        {
            this.load.spritesheet("uiMenuBar", "assets/UI/UI_Menu.png", {
                frameWidth: 314,
                frameHeight: 622
            });

            this.load.spritesheet("iconSettings", "assets/Icons/Icon_Settings.png", {
                frameWidth: 86,
                frameHeight: 86,
            });

            this.load.spritesheet("iconSlotMachine", "assets/Icons/Icon_Slots.png", {
                frameWidth: 86,
                frameHeight: 86,
            });

            this.load.spritesheet("iconEnergy", "assets/Icons/Icon_SmallEnergy.png", {
                frameWidth: 78,
                frameHeight: 93,
            });
            this.load.spritesheet("iconAllert", "assets/Icons/Icon_Sound.png", {
                frameWidth: 86,
                frameHeight: 86,
            });
            this.load.spritesheet("iconDoor", "assets/Icons/Icon_Levels.png", {
                frameWidth: 86,
                frameHeight: 86,
            });
            this.load.spritesheet("iconTrophy", "assets/Icons/Icon_Rating.png", {
                frameWidth: 86,
                frameHeight: 86,
            });
            this.load.spritesheet("iconFriends", "assets/Icons/Icon_CallFriends.png", {
                frameWidth: 86,
                frameHeight: 86,
            });
            this.load.spritesheet("iconRepair", "assets/Icons/Icon_Repairs.png", {
                frameWidth: 86,
                frameHeight: 86,
            });
        } //Menu Preload

        {
            this.load.spritesheet("craftBar", "assets/UI/UI_RecipeUnderlay.png", {
                frameWidth: 884,
                frameHeight: 1515,
            });
            this.load.spritesheet("leftArrow", "assets/UI/UI_LeftArrowButton.png", {
                frameWidth: 100,
                frameHeight: 240,
            });
            this.load.spritesheet("rightArrow", "assets/UI/UI_RightArrowButton.png", {
                frameWidth: 100,
                frameHeight: 240,
            });
            this.load.spritesheet("StepPictureUnderlay", "assets/UI/UI_StepPictureUnderlay.png", {
                frameWidth: 286,
                frameHeight: 286,
            });

            this.load.spritesheet("StepActionButton", "assets/UI/UI_StepActionButton.png", {
                frameWidth: 320,
                frameHeight: 86,
            });

            this.load.spritesheet("plus", "assets/UI/UI_+.png", {
                frameWidth: 118,
                frameHeight: 118,
            });
            this.load.spritesheet("equals", "assets/UI/UI_=.png", {
                frameWidth: 114,
                frameHeight: 99,
            });
        } // Craft Preload
        {
            this.load.spritesheet("Beet", "assets/Food/Food_Beet.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Borscht", "assets/Food/Food_Borscht.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Cabbage", "assets/Food/Food_Cabbage.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("CutBeet", "assets/Food/Food_CutBeet.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("CutCabbage", "assets/Food/Food_CutCabbage.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("CutPotato", "assets/Food/Food_CutPotato.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Dough", "assets/Food/Food_Dough.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Flour", "assets/Food/Food_Flour.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("FriedPotatoes", "assets/Food/Food_FriedPotatoes.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("LingonBerry", "assets/Food/Food_LingonBerry.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("LingonberryCompote", "assets/Food/Food_LingonberryCompote.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Meat", "assets/Food/Food_Meat.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("PirozhkiWithCabbage", "assets/Food/Food_PirozhkiWithCabbage.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Potato", "assets/Food/Food_Potato.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Salt", "assets/Food/Food_Salt.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Sugar", "assets/Food/Food_Sugar.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("VegetableOil", "assets/Food/Food_VegetableOil.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Water", "assets/Food/Food_Water.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Yeast", "assets/Food/Food_Yeast.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("Knife", "assets/Tools/Tool_Knife.png", {
                frameWidth: 228,
                frameHeight: 228
            });
            this.load.spritesheet("FryingPan", "assets/Tools/Tool_FryingPan.png", {
                frameWidth: 228,
                frameHeight: 228
            });
        } // Food + Tools Preload

        {
            this.load.image("challengeBG", "assets/Objects/Object_ChallengeBackground.png");
            this.load.image("opponentAvatar", "assets/UI/UI_OpponentAvatar.png");
            this.load.image("opponentUnderlay", "assets/UI/UI_OpponentUnderlay.png");
            this.load.image("mediumGift", "assets/Icons/Icon_MediumGift.png");
            this.load.image("squareTile", "assets/UI/UI_ConsequentNumbersGameTile.png");
            this.load.image("progressOffIndicator", "assets/UI/UI_ProgressOffIndicator.png");
            this.load.image("progressOnIndicator", "assets/UI/UI_ProgressOnIndicator.png");

            this.load.image("consolationPrizeUnderlay", "assets/UI/UI_ConsolationPrizeUnderlay.png");
            this.load.image("consolationPrizeButton", "assets/UI/UI_CollectConsolationPrizeButton.png");
            this.load.image("challengeDefeatBG", "assets/Objects/Object_DefeatBackground.png");
            this.load.image("defeatUnderlay", "assets/UI/UI_DefeatUnderlay.png");

            this.load.image("largeGift", "assets/Icons/Icon_LargeGift.png");
            this.load.image("victoryButton", "assets/UI/UI_Victory.png");
            this.load.image("giftBackground", "assets/Objects/Object_GiftBackground.png");
            this.load.image("rays", "assets/UI/UI_Rays.png");

        } // Challenge Preload

        {
            this.load.image("Icon_Music", "assets/Icons/Icon_Music.png");
            this.load.image("Icon_Sound", "assets/Icons/Icon_Sound.png");
            this.load.image("ToggleOff", "assets/UI/UI_ToggleOff.png");
            this.load.image("ToggleOn", "assets/UI/UI_ToggleOn.png");
            this.load.image("SettingsUnderlay", "assets/UI/UI_SettingsUnderlay.png");
        } // Settings Preload
        {
            this.load.spritesheet("CoinGlow", "assets/Anim/Anim_Glow/Anim_CoinGlow.png", {
                frameWidth: 79,
                frameHeight: 85
            });
            this.load.spritesheet("EnergyGlow", "assets/Anim/Anim_Glow/Anim_EnergyGlow.png", {
                frameWidth: 78,
                frameHeight: 93
            });
            this.load.image("GoodUnderlay", "assets/UI/UI_GoodUnderlay.png");
            this.load.image("EnergyIndicator", "assets/UI/UI_EnergyIndicator.png");
        } // Shop Preload

        {
            this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 
                'rexUI', 'rexUI');
            
            this.load.image("LevelsBackground", "assets/Objects/Object_LevelsBackground.png");
            this.load.image("Door1", "assets/Objects/Object_BasicDoor.png");
            this.load.image("Door2", "assets/Objects/Object_RussianDoor.png");
            this.load.image("Door3", "assets/Objects/Object_UkranianDoor.png");
            this.load.image("Door4", "assets/Objects/Object_XmasDoor.png");

            this.load.image("openLevelButton", "assets/UI/UI_OpenLevelButton.png");
            this.load.image("iconLock", "assets/Icons/Icon_Lock.png");
            this.load.image("mediumCheck", "assets/Icons/Icon_MediumCheck.png");
        } // Levels Preload
    }


    create() {

        {
            var unfixedWall = this.add.sprite(0, 0, "unfixedWall");
            unfixedWall.setOrigin(0, 0);

            var fixedWall = this.add.sprite(0, 0, "fixedWall");
            fixedWall.setOrigin(0, 0);
            fixedWall.setActive(false).setVisible(false);

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
            fixedTable.setActive(false).setVisible(false);

            //building smoke objects
            var buildingSmokeTable1, buildingSmokeTable2, buildingSmokeTable3, buildingSmokeTable4, buildingSmokeTable5,
                buildingSmokeTable6, buildingSmokeTable7, buildingSmokeTable8;

            var buildingSmokeWall1, buildingSmokeWall2, buildingSmokeWall3, buildingSmokeWall4, buildingSmokeWall5, buildingSmokeWall6,
                buildingSmokeWall7, buildingSmokeWall8, buildingSmokeWall9, buildingSmokeWall10, buildingSmokeWall11, buildingSmokeWall12;

            var buildingSmokeKitchen1, buildingSmokeKitchen2, buildingSmokeKitchen3, buildingSmokeKitchen4, buildingSmokeKitchen5,
                buildingSmokeKitchen6, buildingSmokeKitchen7, buildingSmokeKitchen8;

            var buildingSmokeWindow1, buildingSmokeWindow2, buildingSmokeWindow3;

            var buildingSmokes = {
                "wall": {
                    "objArr": [buildingSmokeWall1, buildingSmokeWall2, buildingSmokeWall3, buildingSmokeWall4, buildingSmokeWall5, buildingSmokeWall6,
                                buildingSmokeWall7, buildingSmokeWall8, buildingSmokeWall9, buildingSmokeWall10, buildingSmokeWall11, buildingSmokeWall12],
                    "optsArr": [{
                            "x": config.width * 0.03,
                            "y": config.height * 0.04,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.29,
                            "y": config.height * 0.064,
                            "scale": 1.5
                        },
                        {
                            "x": config.width * 0.59,
                            "y": config.height * 0.02,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.92,
                            "y": config.height * 0.02,
                            "scale": 1
                        },
                        {
                            "x": config.width * (-0.145),
                            "y": config.height * 0.2,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.6,
                            "y": config.height * 0.16,
                            "scale": 1
                        },
                        {
                            "x": config.width * 1.08,
                            "y": config.height * 0.13,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.03,
                            "y": config.height * 0.335,
                            "scale": 0.7
                        },
                        {
                            "x": config.width * 0.24,
                            "y": config.height * 0.35,
                            "scale": 0.7
                        },
                        {
                            "x": config.width * 0.42,
                            "y": config.height * 0.35,
                            "scale": 0.7
                        },
                        {
                            "x": config.width * 0.61,
                            "y": config.height * 0.29,
                            "scale": 1.2
                        },
                        {
                            "x": config.width * 0.91,
                            "y": config.height * 0.31,
                            "scale": 1.2
                        }]
                },
                "window": {
                    "objArr": [buildingSmokeWindow1, buildingSmokeWindow2, buildingSmokeWindow3],
                    "optsArr": [{
                            "x": config.width * 0.13,
                            "y": config.height * 0.22,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.38,
                            "y": config.height * 0.17,
                            "scale": 1
                        },
                        {
                            "x": config.width * 0.38,
                            "y": config.height * 0.29,
                            "scale": 0.7
                        }]
                },
                "kitchen": {
                    "objArr": [buildingSmokeKitchen1, buildingSmokeKitchen2, buildingSmokeKitchen3, buildingSmokeKitchen4, buildingSmokeKitchen5,
                                buildingSmokeKitchen6, buildingSmokeKitchen7, buildingSmokeKitchen8],
                    "optsArr": [{
                            "x": config.width * 0.78,
                            "y": config.height * 0.156,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.095,
                            "y": config.height * 0.38,
                            "scale": 1
                        },
                        {
                            "x": config.width * 0.29,
                            "y": config.height * 0.4,
                            "scale": 0.7
                        },
                        {
                            "x": config.width * 0.66,
                            "y": config.height * 0.4,
                            "scale": 0.7
                        },
                        {
                            "x": config.width * 0.1,
                            "y": config.height * 0.534,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.5,
                            "y": config.height * 0.47,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.87,
                            "y": config.height * 0.47,
                            "scale": 1.6
                        },
                        {
                            "x": config.width * 0.93,
                            "y": config.height * 0.6,
                            "scale": 0.7
                        }]
                },
                "table": {
                    "objArr": [buildingSmokeTable1, buildingSmokeTable2, buildingSmokeTable3, buildingSmokeTable4, buildingSmokeTable5,
                                buildingSmokeTable6, buildingSmokeTable7, buildingSmokeTable8],
                    "optsArr": [{
                            "x": config.width * 0.28,
                            "y": config.height * 0.66,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.66,
                            "y": config.height * 0.64,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.13,
                            "y": config.height * 0.83,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.5,
                            "y": config.height * 0.81,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.86,
                            "y": config.height * 0.81,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.8,
                            "y": config.height * 0.98,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.36,
                            "y": config.height * 0.98,
                            "scale": 1.7
                        },
                        {
                            "x": config.width * 0.05,
                            "y": config.height * 0.95,
                            "scale": 1.7
                        }]
                }
            };

            var i;
            //table
            var arr = buildingSmokes.table.objArr,
                optsArr = buildingSmokes.table.optsArr;
            for (i = 0; i < arr.length; i++) {
                arr[i] = this.add.sprite(optsArr[i].x, optsArr[i].y, "building");
                arr[i].setActive(false).setVisible(false).setScale(optsArr[i].scale);
            }

            //wall
            arr = buildingSmokes.wall.objArr, optsArr = buildingSmokes.wall.optsArr;
            for (i = 0; i < arr.length; i++) {
                arr[i] = this.add.sprite(optsArr[i].x, optsArr[i].y, "building");
                arr[i].setActive(false).setVisible(false).setScale(optsArr[i].scale);
            }

            //kitchen
            arr = buildingSmokes.kitchen.objArr, optsArr = buildingSmokes.kitchen.optsArr;
            for (i = 0; i < arr.length; i++) {
                arr[i] = this.add.sprite(optsArr[i].x, optsArr[i].y, "building");
                arr[i].setActive(false).setVisible(false).setScale(optsArr[i].scale);
            }

            //window
            arr = buildingSmokes.window.objArr, optsArr = buildingSmokes.window.optsArr;
            for (i = 0; i < arr.length; i++) {
                arr[i] = this.add.sprite(optsArr[i].x, optsArr[i].y, "building");
                arr[i].setActive(false).setVisible(false).setScale(optsArr[i].scale);
            }

            this.anims.create({
                key: "buildingSmoke",
                frames: this.anims.generateFrameNumbers("building"),
                repeat: 0
            });



        } //спавним мебель

        {

            var uiSC = this.add.sprite(config.width * 0.22, config.height * 0.04, "uiSC");
            uiSC.setInteractive();

            var initialSCX = uiSC.x;
            var initialSCY = uiSC.y;

            this.goldText = this.add.text(uiSC.x, uiSC.y, gameSettings.currGold, {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "white"
            });

            var goldText0 = this.goldText;
            goldText0.setOrigin(0.5);

            var uiPlay = this.add.sprite(config.width / 2, config.height * 0.93, "uiPlay");
            uiPlay.setInteractive();

            this.playText = this.add.text(config.width / 2, config.height * 0.93, "Играть!", {
                fontFamily: 'font1',
                fontSize: '80px',
                color: "brown"
            });

            var playText0 = this.playText;
            playText0.setActive(true).setVisible(true).setOrigin(0.5);

            var uiGift = this.add.sprite(config.width * 0.1, config.height * 0.15, "uiGift");
            uiGift.setInteractive();

            var uiEnergyBar = this.add.sprite(config.width * 0.75, config.height * 0.04, "uiEnergyBar");
            uiEnergyBar.setActive(false).setVisible(false).setDepth(1.1);

            var uiNotificationsUnderlay = this.add.sprite(config.width / 2, config.height / 2, "uiNotification");
            uiNotificationsUnderlay.setActive(false).setVisible(false);

            var uiNotificationsBackButton = this.add.sprite(config.width * 0.9, config.height * 0.95, "uiBackButton");
            uiNotificationsBackButton.setInteractive();
            uiNotificationsBackButton.setActive(false).setVisible(false);

            var giftJSON = [
                {
                    "NotificationID": 0,
                    "Type": "take",
                    "Sender": "Усама Бен Ладен",
                    "SC": 0,
                    "Energy": 40
  },
                {
                    "NotificationID": 1,
                    "Type": "send",
                    "Sender": "Кирилл Глинский",
                    "SC": 0,
                    "Energy": 40
                },
                {
                    "NotificationID": 1,
                    "Type": "send",
                    "Sender": "Harry Potter",
                    "SC": 0,
                    "Energy": 40
                },
];

            var notificationsX = config.width / 2;
            var notificationsY = config.height * 0.3;
            var notificationPanelsSprites = [];
            var collectGiftSprites = [];
            var senderTextSprites = [];
            var typeTextSprites = [];
            var distanceBetweenNotifications = 200;
            for (var i = 0; i < giftJSON.length; i++) {
                eval(`var ${"notificationPanel"+i} = this.add.sprite(notificationsX,notificationsY,"uiFriendNotification"); notificationPanelsSprites.push(${"notificationPanel"+i});
                ${"notificationPanel"+i}.setActive(false).setVisible(false);`);
                eval(`var ${"collectGift"+i} = this.add.sprite(notificationsX+config.width*0.2,notificationsY,"uiGiftCollect");
                collectGiftSprites.push(${"collectGift"+i});
                ${"collectGift"+i}.setInteractive().setActive(false).setVisible(false);`);
                if (giftJSON[i]["Type"] == "take") {
                    eval(`var ${"senderText"+i} = this.add.text(notificationsX-config.width*0.3,notificationsY-config.height * 0.027, giftJSON[i]["Sender"]+"\\nприслал подарок",{
                        fontFamily: 'font1',
                        fontSize: '44px',
                        color: "white",
                    });
                senderTextSprites.push(${"senderText"+i});
                ${"senderText"+i}.setActive(false).setVisible(false);`);
                    eval(`var ${"typeText"+i} = this.add.text(notificationsX+config.width*0.11,notificationsY-config.height * 0.012,"Забрать",{
                        fontFamily: 'font1',
                        fontSize: '44px',
                        color: "white",
                    });
                typeTextSprites.push(${"typeText"+i});
                ${"typeText"+i}.setActive(false).setVisible(false);`);
                } else if (giftJSON[i]["Type"] == "send") {
                    eval(`var ${"senderText"+i} = this.add.text(notificationsX-config.width*0.3,notificationsY-config.height * 0.027, giftJSON[i]["Sender"]+"\\nпросит помощи!",{
                        fontFamily: 'font1',
                        fontSize: '44px',
                        color: "white",
                    });
                senderTextSprites.push(${"senderText"+i});
                ${"senderText"+i}.setActive(false).setVisible(false);`);
                    eval(`var ${"typeText"+i} = this.add.text(notificationsX+config.width*0.11,notificationsY-config.height * 0.012,"Отправить",{
                        fontFamily: 'font1',
                        fontSize: '35px',
                        color: "white"
                        
                });
                typeTextSprites.push(${"typeText"+i});
                ${"typeText"+i}.setActive(false).setVisible(false);`);
                };
                notificationsY += distanceBetweenNotifications;
            };


            var uiNotificationsCounter = this.add.sprite(config.width * 0.17, config.height * 0.182, "uiNotificationsCounter");
            var uiNotificationsCounterText = this.add.text(config.width * 0.155, config.height * 0.168, giftJSON.length, {
                fontFamily: 'font1',
                fontSize: '50px',
                color: "white"
            });


            for (let i = 0; i < giftJSON.length; i++) {
                collectGiftSprites[i].on("pointerdown", function destroyOnTouch() {
                    notificationPanelsSprites[i].destroy();
                    collectGiftSprites[i].destroy();
                    senderTextSprites[i].destroy();
                    typeTextSprites[i].destroy();
                    if (giftJSON[i].Type == "take") {
                        gameSettings.currEnergy += giftJSON[i].Energy
                        gameSettings.currGold += giftJSON[i].SC;
                    } else if (giftJSON[i].Type == "send") {
                        // работа с API от ВК
                    };
                    for (let k = i + 1; k < giftJSON.length; k++) {
                        notificationPanelsSprites[k].setY(notificationPanelsSprites[k].y - distanceBetweenNotifications);
                        collectGiftSprites[k].setY(collectGiftSprites[k].y - distanceBetweenNotifications);
                        senderTextSprites[k].setY(senderTextSprites[k].y - distanceBetweenNotifications);
                        typeTextSprites[k].setY(typeTextSprites[k].y - distanceBetweenNotifications);
                    }
                    if (uiNotificationsCounterText.text > 1) {
                        uiNotificationsCounterText.setText(uiNotificationsCounterText.text - 1);
                    }else {
                        uiNotificationsCounter.destroy();
                        uiNotificationsCounterText.destroy();
                    }
                });
            };



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
            uiBackSpinButton.setActive(false).setVisible(false).setDepth(2);

            

            var uiMenuBar = this.add.sprite(config.width * 0.85, config.height / 2, "uiMenuBar");
            uiMenuBar.setScale(3.6);
            uiMenuBar.setInteractive();
            uiMenuBar.setActive(false).setVisible(false);

            var touchBar = this.add.sprite(0, config.height / 2, "uiMenuBar");
            touchBar.setScale(2.6, 4);
            touchBar.setActive(false).setVisible(false);
            touchBar.setInteractive();
        } // спавним UI

        {
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

            var recipesArr = [
                ""
            ];
            var recipes = {
                1: {
                    name: "Жареный Картофель",
                    progress: 0,
                    numberOfCrafts: 7, // количество полных крафтов
                    1: {
                        name: "Картофель",
                        iconName: "Potato",
                        done: false,
                        cost: "200",
                    },
                    2: {
                        name: "Нож",
                        iconName: "Knife",
                        done: false,
                        cost: "Нарезать",
                        beforeResult: true
                    },
                    3: {
                        name: "Нарезанный картофель",
                        iconName: "CutPotato",
                        done: false,
                        cost: ""
                    },
                    4: {
                        name: "Растительное масло",
                        iconName: "VegetableOil",
                        done: false,
                        cost: "150"
                    },
                    5: {
                        name: "Соль",
                        iconName: "Salt",
                        done: false,
                        cost: "200"
                    },
                    6: {
                        name: "Сковорода",
                        iconName: "FryingPan",
                        done: false,
                        cost: "400",
                        beforeResult: true
                    },
                    7: {
                        name: "Жареный Картофель",
                        done: false,
                        cost: ""
                    }
                }
            };
            /*
            var stepPictureUnderlays = [];
            var stepActionButtons = [];
            
            var stepX = config.width / 2;
            var stepY = config.height * 0.3;
            var currCraftPage = 1;
            for (var i = 1; i <= recipes[currCraftPage].numberOfCrafts; i++) {
                stepPictureUnderlays.push("stepPictureUnderlay" + i);
                stepActionButtons.push("actionButton"+ i);
                eval(`var ${stepPictureUnderlays[i-1]} = this.add.sprite(stepX * 0.5,stepY,"StepPictureUnderlay")`);
                eval(`var ${stepActionButtons[i-1]} = this.add.sprite(stepX * 1.3,stepY+config.height*0.02,"StepActionButton")`);
                eval(`var ${recipes[currCraftPage][i]["iconName"]} = this.add.sprite(stepX * 0.5,stepY,"${recipes[currCraftPage][i].iconName}")`);
                stepY+=config.height * 0.2;
            };
            */

            var craftGroup = this.add.group([craftBar, leftArrow, rightArrow, craftBG, uiBackCraftButton]);
            craftGroup.setVisible(false);


        } // спавним элементы крафта

        {
            var spinsBG = this.add.sprite(config.width / 2, config.height / 2, "spinsBG");
            spinsBG.setActive(false).setVisible(false);

            var fridgeRear = this.add.sprite(config.width * 0.48, config.height * 0.555, "fridgeRear");
            fridgeRear.setActive(false).setVisible(false);

            var fridgeShadow = this.add.sprite(config.width / 2, config.height * 0.23, "fridgeShadow");
            fridgeShadow.setActive(false).setVisible(false).setDepth(1.05);

            var fridgeFrame = this.add.sprite(config.width / 2, config.height / 2, "fridgeFrame");
            fridgeFrame.setActive(false).setVisible(false).setDepth(1.07);

            // var fridgeDoor = this.add.sprite(config.width * 1.02, config.height * 0.55, "fridgeDoor");
            // fridgeDoor.setActive(false).setVisible(false).setInteractive().setDepth(1.08);

            var slammingFridgeDoorObject = this.add.sprite(config.width * 0.655, config.height * 0.54, "slammingFridgeDoor")
            slammingFridgeDoorObject.setActive(false).setVisible(false).setInteractive().setDepth(1.19); //Depth to be higher than spinButton

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
                repeat: -1,
            });


            this.anims.create({
                key: "slamming",
                frames: this.anims.generateFrameNumbers("slammingFridgeDoor", {
                    start: 0,
                    end: 44
                }),
                repeat: 0
            });

            var spinButton = this.add.sprite(config.width * 0.45, config.height * 0.9, "spinButton");
            spinButton.setActive(false).setVisible(false).setFrame(0).setDepth(1.1);

            var energyBar = this.add.sprite(config.width * 0.47, config.height * 0.77, "energyBar");
            energyBar.setActive(false).setVisible(false).setDepth(1.1);

            var energyIcon = this.add.sprite(config.width * 0.42, config.height * 0.765, "iconEnergy");
            energyIcon.setScale(0.6).setActive(false).setVisible(false).setDepth(1.1);

            this.energyText = this.add.text(energyBar.x, energyBar.y * 0.97, gameSettings.currEnergy, {
                fontFamily: 'font1',
                fontSize: '70px',
                color: "purple"
            });


            var energyText0 = this.energyText;
            energyText0.setInteractive();
            energyText0.setActive(false).setVisible(false).setDepth(1.1);
            var firstRowParameter, secondRowParameter, thirdRowParameter;

            {

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

                var firstSlotT5 = this.tweens.add({
                    paused: true,
                    targets: firstSlot1,
                    y: config.height * 0.4,
                    ease: 'Linear',
                    duration: 184.615,
                    delay: 2100,
                });

                var firstSlotT4 = this.tweens.add({
                    paused: true,
                    targets: secondSlot1,
                    y: config.height * 0.53,
                    ease: 'Linear',
                    duration: 244.615,
                    delay: 2050,

                });

                var firstSlotT3 = this.tweens.add({
                    paused: true,
                    targets: thirdSlot1,
                    y: config.height * 0.65,
                    ease: 'Linear',
                    duration: 300,
                    delay: 2000,
                    repeat: 0,
                });

                var firstSlotT2 = this.tweens.add({
                    paused: true,
                    delay: 500,
                    targets: secondSlotB1,
                    y: config.height * 1.25,
                    ease: 'Linear',
                    duration: 1000,
                    repeat: 1,
                });

                var firstSlotT1 = this.tweens.add({
                    paused: true,
                    delay: 0,
                    targets: firstSlotB1,
                    y: config.height * 1.25,
                    ease: 'Linear',
                    duration: 1000,
                    repeat: 1,
                });

                var secondSlotT5 = this.tweens.add({
                    paused: true,
                    targets: firstSlot2,
                    y: config.height * 0.4,
                    ease: 'Linear',
                    duration: 184.615,
                    delay: 2500,
                });

                var secondSlotT4 = this.tweens.add({
                    paused: true,
                    targets: secondSlot2,
                    y: config.height * 0.53,
                    ease: 'Linear',
                    duration: 244.615,
                    delay: 2450,
                });

                var secondSlotT3 = this.tweens.add({
                    paused: true,
                    targets: thirdSlot2,
                    y: config.height * 0.65,
                    ease: 'Linear',
                    duration: 300,
                    delay: 2400,
                    repeat: 0
                });

                var secondSlotT2 = this.tweens.add({
                    paused: true,
                    delay: 900,
                    targets: secondSlotB2,
                    y: config.height * 1.25,
                    ease: 'Linear',
                    duration: 1000,
                    repeat: 1,
                });

                var secondSlotT1 = this.tweens.add({
                    paused: true,
                    delay: 400,
                    targets: firstSlotB2,
                    y: config.height * 1.25,
                    ease: 'Linear',
                    duration: 1000,
                    repeat: 1,
                });


                var thirdSlotT1 = this.tweens.add({
                    paused: true,
                    delay: 800,
                    targets: firstSlotB3,
                    y: config.height * 1.25,
                    ease: 'Linear',
                    duration: 1000,
                    repeat: 1,
                });

                var thirdSlotT2 = this.tweens.add({
                    paused: true,
                    delay: 1300,
                    targets: secondSlotB3,
                    y: config.height * 1.25,
                    ease: 'Linear',
                    duration: 1000,
                    offset: 0,
                    repeat: 1,
                });

                var thirdSlotT3 = this.tweens.add({
                    paused: true,
                    targets: thirdSlot3,
                    y: config.height * 0.65,
                    ease: 'Linear',
                    duration: 300,
                    delay: 2800,
                    repeat: 0
                });
                var thirdSlotT4 = this.tweens.add({
                    paused: true,
                    targets: secondSlot3,
                    y: config.height * 0.53,
                    ease: 'Linear',
                    duration: 244.615,
                    delay: 2850,
                });

                var thirdSlotT5 = this.tweens.add({
                    paused: true,
                    targets: firstSlot3,
                    y: config.height * 0.4,
                    ease: 'Linear',
                    duration: 184.615,
                    delay: 2900,
                });

            } // анимации

            var spinGroup = this.add.group([spinsBG, fridgeRear, fridgeFrame, fridgeShadow, /*fridgeDoor*/ slammingFridgeDoorObject, spinButton, energyBar, energyIcon, energyText0, firstSlot1, secondSlot1, thirdSlot1, firstSlot2, secondSlot2, thirdSlot2, firstSlot3, secondSlot3, thirdSlot3, firstSlotB1, secondSlotB1, firstSlotB2, secondSlotB2, firstSlotB3, secondSlotB3]);

        } // спавним экраны

        {

            var uiFixUpgradeGeneral = this.add.sprite(config.width * 0.5, config.height * 0.72, "uiFixUpgrade");
            var uiFixUpgradeScale = 1.2;
            uiFixUpgradeGeneral.setScale(uiFixUpgradeScale).setInteractive().setActive(false).setVisible(false);
            var uiTextGeneral = this.add.text(uiFixUpgradeGeneral.x + 24 * uiFixUpgradeScale, uiFixUpgradeGeneral.y - 76 * uiFixUpgradeScale, 0, {
                font: '108px font1',
                color: 'brown'
            });
            uiTextGeneral.setInteractive().setActive(false).setVisible(false);
            uiTextGeneral.setOrigin(0.5, 0.5);

        } //спавним элементы экрана улучшений

        {
            var iconSlotMachine = this.add.sprite(config.width * 0.55, 230, "iconSlotMachine");
            var playMenuText = this.add.text(config.width * 0.6, 200, "Играть!", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var iconEnegry = this.add.sprite(config.width * 0.55, 453, "iconEnergy");
            var buyMenuText = this.add.text(config.width * 0.6, 400, "Купить\nмонеты/энергию", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var iconFix = this.add.sprite(config.width * 0.55, 623, "iconRepair");
            var fixMenuText = this.add.text(config.width * 0.6, 600, "Ремонт", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var iconAllert = this.add.sprite(config.width * 0.55, 830, "iconAllert");
            var announceMenuText = this.add.text(config.width * 0.6, 800, "Уведомления\n", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var iconDoor = this.add.sprite(config.width * 0.55, 1030, "iconDoor");
            var levelsMenuText = this.add.text(config.width * 0.6, 1000, "Уровни\n", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var iconTrophy = this.add.sprite(config.width * 0.55, 1230, "iconTrophy");
            var ratingMenuText = this.add.text(config.width * 0.6, 1200, "Рейтинг\n", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var iconFriends = this.add.sprite(config.width * 0.55, 1430, "iconFriends");
            var friendsMenuText = this.add.text(config.width * 0.6, 1400, "Позвать друзей\n", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var iconSettings = this.add.sprite(config.width * 0.55, 1625, "iconSettings");
            var settingsMenuText = this.add.text(config.width * 0.6, 1600, "Настройки\n", {
                fontFamily: 'font1',
                fontSize: '64px',
                color: "brown"
            });
            var menu = this.add.group([iconSlotMachine,
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
            menu.setVisible(false);
            menu.getChildren().forEach(setAllInteractive);

            function setAllInteractive(element, index) {
                element.setInteractive();
            }
        } // спавним элементы меню

        {


            var opponentAvatar = this.add.sprite(config.width * 0.14, config.height * 0.07, "opponentAvatar");
            opponentAvatar.setActive(false).setVisible(false).setDepth(1.2);

            var opponentUnderlay = this.add.sprite(config.width * 0.435, config.height * 0.07, "opponentUnderlay");
            opponentUnderlay.setActive(false).setVisible(false).setDepth(1.1);

            var challengeMediumGift = this.add.sprite(config.width * 0.1, config.height * 0.53, "mediumGift");
            challengeMediumGift.setActive(false).setVisible(false).setDepth(1.1);

            var challengeBG = this.add.sprite(config.width * 0.5, config.height * 0.5, "challengeBG");
            challengeBG.setActive(false).setVisible(false).setDepth(1);

            var tiles = [];
            var indicators = [];
            var i, tileX = 0.29,
                tileDX = 0.21,
                tileY1 = 0.19,
                tileY2 = 0.64,
                tileDY = 0.12,
                indX = 0.3,
                indDX = 0.05,
                indY1 = 0.51,
                indY2 = 0.555;


            for (i = 0; i < 9; i++) {
                //opponent tiles
                tiles[i] = this.add.sprite(config.width * (tileX + tileDX * (i % 3)), config.height * (tileY1 + tileDY * (i - i % 3) / 3), "squareTile");
                tiles[i].setActive(false).setVisible(false).setDepth(1.1).setInteractive();

                //oppenent progress
                indicators[i] = this.add.sprite(config.width * (indX + indDX * i), config.height * indY1, "progressOffIndicator");
                indicators[i].setActive(false).setVisible(false).setDepth(1.1);
                indicators[i + 18] = this.add.sprite(config.width * (indX + indDX * i), config.height * indY1, "progressOnIndicator");
                indicators[i + 18].setActive(false).setVisible(false).setDepth(1.2);

                //player tiles
                tiles[i + 9] = this.add.sprite(config.width * (tileX + tileDX * (i % 3)), config.height * (tileY2 + tileDY * (i - i % 3) / 3), "squareTile");
                tiles[i + 9].setActive(true).setVisible(false).setDepth(1.1).setInteractive();
                //player progress
                indicators[i + 9] = this.add.sprite(config.width * (indX + indDX * i), config.height * indY2, "progressOffIndicator");
                indicators[i + 9].setActive(false).setVisible(false).setDepth(1.1);
                indicators[i + 27] = this.add.sprite(config.width * (indX + indDX * i), config.height * indY2, "progressOnIndicator");
                indicators[i + 27].setActive(false).setVisible(false).setDepth(1.2);
            }

            var challengeTileTexts = [];
            for (i = 0; i < 9; i++) {
                challengeTileTexts[i] = this.add.text(0, 0, i + 1, {
                    fontFamily: 'font1',
                    fontSize: '108px',
                    color: "white",
                    align: "center"
                });
                challengeTileTexts[i].setActive(false).setVisible(false).setDepth(1.2).setOrigin(0.5, 0.5);
                challengeTileTexts[i + 9] = this.add.text(0, 0, i + 1, {
                    fontFamily: 'font1',
                    fontSize: '108px',
                    color: "white",
                    align: "center"
                });
                challengeTileTexts[i + 9].setActive(false).setVisible(false).setDepth(1.2).setOrigin(0.5, 0.5);
            }

            var challengeObjects = [opponentAvatar, opponentUnderlay, challengeMediumGift, challengeBG];
            Array.prototype.push.apply(challengeObjects, tiles);
            Array.prototype.push.apply(challengeObjects, indicators);
            Array.prototype.push.apply(challengeObjects, challengeTileTexts);

            var consolationPrizeUnderlay = this.add.sprite(config.width * 0.5, config.height * 0.58, "consolationPrizeUnderlay");
            consolationPrizeUnderlay.setActive(false).setVisible(false).setDepth(1.3);

            var consolationPrizeButton = this.add.sprite(config.width * 0.5, config.height * 0.73, "consolationPrizeButton");
            consolationPrizeButton.setActive(false).setVisible(false).setDepth(1.3).setInteractive();

            var challengeDefeatBG = this.add.sprite(config.width * 0.5, config.height * 0.5, "challengeDefeatBG");
            challengeDefeatBG.setActive(false).setVisible(false).setDepth(1.1);

            var defeatUnderlay = this.add.sprite(config.width * 0.5, config.height * 0.47, "defeatUnderlay");
            defeatUnderlay.setActive(false).setVisible(false).setDepth(1.2);

            var defeatText1 = this.add.text(defeatUnderlay.x, defeatUnderlay.y - defeatUnderlay.height * 0.4, "Поражение", {
                fontFamily: 'font1',
                fontSize: '110px',
                color: "white",
                align: "center"
            });
            defeatText1.setActive(false).setVisible(false).setDepth(1.4).setOrigin(0.5, 0.5);

            var defeatText2 = this.add.text(defeatUnderlay.x, defeatUnderlay.y - defeatUnderlay.height * 0.21, "Не переживайте,\nв следующий раз\nточно получится!", {
                fontFamily: 'font1',
                fontSize: '80px',
                color: "white",
                align: "justify"
            });
            defeatText2.setActive(false).setVisible(false).setDepth(1.4).setOrigin(0.5, 0.5);

            var defeatText3 = this.add.text(defeatUnderlay.x, defeatUnderlay.y - defeatUnderlay.height * 0.02, "Вот. держите:", {
                fontFamily: 'font1',
                fontSize: '90px',
                color: "white",
                align: "center"
            });
            defeatText3.setActive(false).setVisible(false).setDepth(1.4).setOrigin(0.5, 0.5);

            var defeatTextMoney = this.add.text(consolationPrizeUnderlay.x, consolationPrizeUnderlay.y, 400, {
                fontFamily: 'font1',
                fontSize: '100px',
                color: "white",
                align: "center"
            });
            defeatTextMoney.setActive(false).setVisible(false).setDepth(1.4).setOrigin(0.5, 0.5);

            var defeatTextButton = this.add.text(consolationPrizeButton.x, consolationPrizeButton.y, "Забрать", {
                fontFamily: 'font1',
                fontSize: '90px',
                color: "white",
                align: "center"
            });
            defeatTextButton.setActive(false).setVisible(false).setDepth(1.4).setOrigin(0.5, 0.5);

            var challengeDefeatObjects = [consolationPrizeUnderlay, consolationPrizeButton, challengeDefeatBG, defeatUnderlay,
                                            defeatText1, defeatText2, defeatText3, defeatTextMoney, defeatTextButton];

            var largeGift = this.add.sprite(config.width * 0.5, config.height * 0.36, "largeGift");
            largeGift.setActive(false).setVisible(false).setDepth(1.3);

            var victoryButton = this.add.sprite(config.width * 0.5, config.height * 0.7, "victoryButton");
            victoryButton.setActive(false).setVisible(false).setDepth(1.4).setInteractive();

            var giftBackground = this.add.sprite(config.width * 0.5, config.height * 0.5, "giftBackground");
            giftBackground.setActive(false).setVisible(false).setDepth(1.1);

            var rays = this.add.sprite(config.width * 0.5, config.height * 0.36, "rays");
            rays.setActive(false).setVisible(false).setDepth(1.2);

            var victoryTextButton = this.add.text(victoryButton.x, victoryButton.y, "Победа", {
                fontFamily: 'font1',
                fontSize: '110px',
                color: "white",
                align: "center"
            });
            victoryTextButton.setActive(false).setVisible(false).setDepth(1.5).setOrigin(0.5, 0.5);

            var challengeVictoryObjects = [largeGift, victoryButton, giftBackground, rays, victoryTextButton];

        } // спавним элементы испытания

        {

            var settingsUnderlay = this.add.sprite(config.width * 0.5, config.height * 0.45, "SettingsUnderlay");
            var soundIcon = this.add.sprite(settingsUnderlay.x - settingsUnderlay.width * 0.28, settingsUnderlay.y - settingsUnderlay.height * 0.05, "Icon_Sound");
            var musicIcon = this.add.sprite(settingsUnderlay.x - settingsUnderlay.width * 0.28, settingsUnderlay.y + settingsUnderlay.height * 0.15, "Icon_Music");



            var settingsIcon = this.add.sprite(settingsUnderlay.x - settingsUnderlay.width * 0.3, settingsUnderlay.y - settingsUnderlay.height * 0.35, "iconSettings");


            var musicText = this.add.text(musicIcon.x + settingsUnderlay.width * 0.05, musicIcon.y, "Музыка", {
                fontFamily: 'font1',
                fontSize: '70px',
                color: "black",
                align: "left"
            });
            var soundText = this.add.text(soundIcon.x + settingsUnderlay.width * 0.05, soundIcon.y, "Звуки", {
                fontFamily: 'font1',
                fontSize: '70px',
                color: "black",
                align: "left"
            });
            var settingsText = this.add.text(settingsIcon.x + settingsIcon.width * 0.75, settingsIcon.y, "Настройки", {
                fontFamily: 'font1',
                fontSize: '90px',
                color: "black",
                align: "center"
            });
            var settingsID = this.add.text(settingsUnderlay.x, settingsUnderlay.y + settingsUnderlay.height * 0.4, "Ваш ID: 12324552", {
                fontFamily: 'font1',
                fontSize: '48px',
                color: "#78781e",
                align: "center"
            });
            var soundToggleOn = this.add.sprite(settingsUnderlay.x + settingsUnderlay.width * 0.3, soundIcon.y, "ToggleOn");
            var soundToggleOff = this.add.sprite(soundToggleOn.x, soundToggleOn.y, "ToggleOff");
            var musicToggleOn = this.add.sprite(settingsUnderlay.x + settingsUnderlay.width * 0.3, musicIcon.y, "ToggleOn");
            var musicToggleOff = this.add.sprite(musicToggleOn.x, musicToggleOn.y, "ToggleOff");
            var settingsBackButton = this.add.sprite(config.width, config.height, "uiBackButton");

            settingsUnderlay.setActive(false).setVisible(false).setDepth(1);
            soundIcon.setActive(false).setVisible(false).setDepth(1.1).setOrigin(1, 0.5);
            musicIcon.setActive(false).setVisible(false).setDepth(1.1).setOrigin(1, 0.5);
            settingsIcon.setActive(false).setVisible(false).setDepth(1.1);

            settingsID.setActive(false).setVisible(false).setDepth(1.1).setOrigin(0.5, 0.5);
            musicText.setActive(false).setVisible(false).setDepth(1.1).setOrigin(0.0, 0.5);
            soundText.setActive(false).setVisible(false).setDepth(1.1).setOrigin(0.0, 0.5);
            settingsText.setActive(false).setVisible(false).setDepth(1.1).setOrigin(0.0, 0.5);

            soundToggleOn.setActive(false).setVisible(false).setDepth(1.2).setOrigin(0.5, 0.5).setInteractive();
            soundToggleOff.setActive(false).setVisible(false).setDepth(1.1).setOrigin(0.5, 0.5).setInteractive();
            musicToggleOn.setActive(false).setVisible(false).setDepth(1.2).setOrigin(0.5, 0.5).setInteractive();
            musicToggleOff.setActive(false).setVisible(false).setDepth(1.1).setOrigin(0.5, 0.5).setInteractive();
            settingsBackButton.setActive(false).setVisible(false).setDepth(1.1).setOrigin(1.0, 1.0).setInteractive();

            var settingsObjects = [settingsUnderlay, soundIcon, musicIcon, settingsIcon, musicText, soundText, settingsText, settingsID, soundToggleOn, soundToggleOff, musicToggleOn, musicToggleOff, settingsBackButton];
        } // спавним элементы настроек

        {
            var shopGoodOpts = [{"quantity":25, "price":20}, {"quantity":70, "price":50}, {"quantity":200, "price":140},
                            {"quantity":5000, "price":20}, {"quantity":20000, "price":50}, {"quantity":100000, "price":140}];

            // var energyIndicator = this.add.sprite(config.width*0.75, config.height*0.06, "EnergyIndicator");
            // energyIndicator.setActive(false).setVisible(false).setDepth(4.2).setOrigin(0.5, 0.5);

            var uiBackShopButton = this.add.sprite(config.width, config.height, "uiBackButton");
            uiBackShopButton.setInteractive();
            uiBackShopButton.setActive(false).setVisible(false).setDepth(5).setOrigin(1.0, 1.0);

            var shopBG = this.add.sprite(config.width*0.5, config.height*0.5, "challengeDefeatBG");
            shopBG.setActive(false).setVisible(false).setDepth(4.1).setOrigin(0.5, 0.5).setInteractive();

            var energyText = this.add.text(config.width*0.5, config.height*0.15, "Энергия", {
                                            fontFamily: 'font1',
                                            fontSize: '90px',
                                            color: "black",
                                            align: "center"
                                        });
            energyText.setActive(false).setVisible(false).setDepth(4.2).setOrigin(0.5, 0.5);
            var moneyText = this.add.text(config.width*0.5, config.height*0.51, "Монеты", {
                                            fontFamily: 'font1',
                                            fontSize: '90px',
                                            color: "black",
                                            align: "center"
                                        });
            moneyText.setActive(false).setVisible(false).setDepth(4.2).setOrigin(0.5, 0.5);

            var i;

            var goodUnderlays=[];
            
            for(i=-1; i<=1; i++){
                goodUnderlays[i+1]=this.add.sprite(config.width*0.5+i*config.width*0.3, energyText.y+config.height*0.18, "GoodUnderlay");
                goodUnderlays[i+1].setActive(false).setVisible(false).setDepth(4.2).setOrigin(0.5, 0.5).setInteractive();
            }
            for(i=-1; i<=1; i++){
                goodUnderlays[i+4]=this.add.sprite(config.width*0.5+i*config.width*0.3, moneyText.y+config.height*0.18, "GoodUnderlay");
                goodUnderlays[i+4].setActive(false).setVisible(false).setDepth(4.2).setOrigin(0.5, 0.5).setInteractive();
            }

            var shopEnergies = [];
            i=0;
            shopEnergies[0]=this.add.sprite(goodUnderlays[i].x, goodUnderlays[i].y, "EnergyGlow");

            i=1;
            shopEnergies[1]=this.add.sprite(goodUnderlays[i].x-goodUnderlays[i].width*0.1,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.07, "EnergyGlow");
            shopEnergies[2]=this.add.sprite(goodUnderlays[i].x,
                                            goodUnderlays[i].y+goodUnderlays[i].height*0.05, "EnergyGlow");
            shopEnergies[3]=this.add.sprite(goodUnderlays[i].x+goodUnderlays[i].width*0.12,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.045, "EnergyGlow");

            i=2;
            shopEnergies[4]=this.add.sprite(goodUnderlays[i].x-goodUnderlays[i].width*0.17,
                                            goodUnderlays[i].y, "EnergyGlow");
            shopEnergies[5]=this.add.sprite(goodUnderlays[i].x-goodUnderlays[i].width*0.085,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.1, "EnergyGlow");
            shopEnergies[6]=this.add.sprite(goodUnderlays[i].x,
                                            goodUnderlays[i].y+goodUnderlays[i].height*0.02, "EnergyGlow");
            shopEnergies[7]=this.add.sprite(goodUnderlays[i].x+goodUnderlays[i].width*0.17,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.02, "EnergyGlow");
            shopEnergies[8]=this.add.sprite(goodUnderlays[i].x+goodUnderlays[i].width*0.085,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.08, "EnergyGlow");

            for(i=0; i<9; i++){
                shopEnergies[i].setActive(false).setVisible(false).setDepth(4.3+0.1*i);
            }


            var shopCoins = [];
            i=3;
            shopCoins[0]=this.add.sprite(goodUnderlays[i].x, goodUnderlays[i].y, "CoinGlow");

            i=4;
            shopCoins[1]=this.add.sprite(goodUnderlays[i].x,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.1, "CoinGlow");
            shopCoins[2]=this.add.sprite(goodUnderlays[i].x+goodUnderlays[i].width*0.13,
                                            goodUnderlays[i].y, "CoinGlow");
            shopCoins[3]=this.add.sprite(goodUnderlays[i].x-goodUnderlays[i].width*0.06,
                                            goodUnderlays[i].y+goodUnderlays[i].height*0.04, "CoinGlow");

            i=5;
            shopCoins[4]=this.add.sprite(goodUnderlays[i].x-goodUnderlays[i].width*0.12,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.13, "CoinGlow");
            shopCoins[5]=this.add.sprite(goodUnderlays[i].x-goodUnderlays[i].width*0.2,
                                            goodUnderlays[i].y, "CoinGlow");
            shopCoins[6]=this.add.sprite(goodUnderlays[i].x+goodUnderlays[i].width*0.08,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.12, "CoinGlow");
            shopCoins[7]=this.add.sprite(goodUnderlays[i].x+goodUnderlays[i].width*0.18,
                                            goodUnderlays[i].y-goodUnderlays[i].height*0.03, "CoinGlow");
            shopCoins[8]=this.add.sprite(goodUnderlays[i].x,
                                            goodUnderlays[i].y, "CoinGlow");
            
            for(i=0; i<9; i++){
                shopCoins[i].setActive(false).setVisible(false).setDepth(4.3+0.1*i);
            }

            var shopQuantityTexts = [];
            var shopPrices = [];
            var shopNames = [];
            for(i=0; i<6; i++){
                shopQuantityTexts[i]=this.add.text(goodUnderlays[i].x, goodUnderlays[i].y-goodUnderlays[i].height*0.33, 0, {
                                            fontFamily: 'font1',
                                            fontSize: '50px',
                                            color: "black",
                                            align: "center"
                                        });
                shopQuantityTexts[i].setActive(false).setVisible(false).setDepth(4.3).setOrigin(0.5, 0.5);
                shopPrices[i]=this.add.text(goodUnderlays[i].x, goodUnderlays[i].y+goodUnderlays[i].height*0.25, 0, {
                                            fontFamily: 'font1',
                                            fontSize: '40px',
                                            color: "black",
                                            align: "center"
                                        });
                shopPrices[i].setActive(false).setVisible(false).setDepth(4.3).setOrigin(0.5, 0.5);
                shopNames[i]=this.add.text(goodUnderlays[i].x, goodUnderlays[i].y+goodUnderlays[i].height*0.36, "голосов", {
                                            fontFamily: 'font1',
                                            fontSize: '40px',
                                            color: "black",
                                            align: "center"
                                        });
                shopNames[i].setActive(false).setVisible(false).setDepth(4.3).setOrigin(0.5, 0.5);
            }

            this.anims.create({
                key: "coinGlow",
                frames: this.anims.generateFrameNumbers("CoinGlow", {
                    start: 0,
                    end: 31
                }),
                repeat: -1
            });
            this.anims.create({
                key: "energyGlow",
                frames: this.anims.generateFrameNumbers("EnergyGlow", {
                    start: 0,
                    end: 31
                }),
                repeat: -1
            });
        
            var shopObjects = [uiBackShopButton, shopBG, energyText, moneyText];
            Array.prototype.push.apply(shopObjects, goodUnderlays);
            Array.prototype.push.apply(shopObjects, shopEnergies);
            Array.prototype.push.apply(shopObjects, shopCoins);
            Array.prototype.push.apply(shopObjects, shopPrices);
            Array.prototype.push.apply(shopObjects, shopNames);
            Array.prototype.push.apply(shopObjects, shopQuantityTexts);
        } // спавним элементы магазина

        {
            var levelTexts=["Базовая\nкухня", "Русская\nкухня"/*, "Украинская\nкухня", "Новогодняя\nкухня"*/];
            var _scene = this;
            var levelObjects;
            var levelPanel;
            var levelTextObjects = [];
            var levelDoorObjects = [];
            
            var levelEnterText = this.add.text(0, 0, "Зайти", {
                                    fontFamily: 'font1',
                                    fontSize: '70px',
                                    color: "white",
                                    align: "center"
                                }).setDepth(1.3).setVisible(false).setActive(false);
            var levelEnterButton = this.add.sprite(0, 0, "openLevelButton").setDepth(1.2).setInteractive().setVisible(false).setActive(false);

            var levelBackground =  this.add.sprite(0, 0, "LevelsBackground").setDepth(1).setVisible(false).setActive(false);

            

            for(let i=0; i<levelTexts.length; i++){
                levelTextObjects[i] = this.add.text(0, 0, levelTexts[i], {
                                        fontFamily: 'font1',
                                        fontSize: '65px',
                                        color: "black",
                                        align: "center"
                                    }).setDepth(1.2).setVisible(false).setActive(false);
                levelDoorObjects[i] = this.add.sprite(0, 0, "Door"+(i+1)).setDepth(1.1).setVisible(false).setActive(false);
            }



            levelObjects = [];
            
            // timur   x : config.width*0.518182,      y : config.height*0.145548
            // timur_overlay   x : config.width*0.493939,      y : config.height*0.797945
            // likes   x : config.width*0.224242,      y : config.height*0.496575
            // gift    x : config.width*0.80303,       y : config.height*0.493151
            // sq_1    x : config.width*0.924242,      y : config.height*0.501712
            // this.load.image("openLevelButton", "UI_OpenLevelButton");
            // this.load.image("iconLock", "Icon_Lock.png");
            // this.load.image("mediumCheck", "Icon_MediumCheck.png");

            var levelsBackButton = this.add.sprite(config.width, config.height, "uiBackButton")
                .setActive(false).setVisible(false).setDepth(1.1).setInteractive().setOrigin(1, 1);
        } // спавним элементы уровней


        {
            var downX, upX, downY, upY, threshold = 50,
                buttonFlag;

            //because door is highest layer
            slammingFridgeDoorObject.on('pointerdown', function (pointer) {

                downX = pointer.x;
                downY = pointer.y;
                if (downX <= (spinButton.x + spinButton.width / 2) && downX >= (spinButton.x - spinButton.width / 2) &&
                    downY <= (spinButton.y + spinButton.height / 2) && downY >= (spinButton.y - spinButton.height / 2)) {
                    buttonFlag = true;
                    firstClick = true;
                    spinButton.play("pressed");
                } else {
                    flag = true;
                }
            });

            slammingFridgeDoorObject.on('pointerup', function (pointer) {
                if (flag) {
                    upX = pointer.x;
                    upY = pointer.y;
                    if (upX < downX - threshold) {
                        slammingFridgeDoorObject.play("slamming");
                        setTimeout(function () {
                            roll();
                        }, 900);

                    };
                    flag = false;
                } else if (buttonFlag) {
                    buttonFlag = false;
                    spinButton.play("notPressed");
                    if (firstClick) {
                        roll();
                    }
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

            function randomFrame(firstSlot, secondSlot, thirdSlot, argument) {
                // let a = Math.random();
                var a = 0.8;
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
                return argument;
            };

            function roll() {
                if (gameSettings.currEnergy > 0) {

                    firstSlot1.setPosition(config.width * 0.27, config.height * 0.2);
                    secondSlot1.setPosition(config.width * 0.27, config.height * 0.2);
                    thirdSlot1.setPosition(config.width * 0.27, config.height * 0.2);

                    firstSlot2.setPosition(config.width * 0.45, config.height * 0.2);
                    secondSlot2.setPosition(config.width * 0.45, config.height * 0.2);
                    thirdSlot2.setPosition(config.width * 0.45, config.height * 0.2);

                    firstSlot3.setPosition(config.width * 0.63, config.height * 0.2);
                    secondSlot3.setPosition(config.width * 0.63, config.height * 0.2);
                    thirdSlot3.setPosition(config.width * 0.63, config.height * 0.2);

                    firstSlotB1.setPosition(config.width * 0.27, config.height * 0.01);
                    secondSlotB1.setPosition(config.width * 0.27, config.height * 0.01);

                    firstSlotB2.setPosition(config.width * 0.45, config.height * 0.01);
                    secondSlotB2.setPosition(config.width * 0.45, config.height * 0.01);

                    firstSlotB3.setPosition(config.width * 0.63, config.height * 0.01);
                    secondSlotB3.setPosition(config.width * 0.63, config.height * 0.01);

                    gameSettings.currEnergy--;
                    var row1 = randomFrame(firstSlot1, secondSlot1, thirdSlot1, firstRowParameter);
                    var row2 = randomFrame(firstSlot3, secondSlot3, thirdSlot3, thirdRowParameter);
                    var row3 = randomFrame(firstSlot2, secondSlot2, thirdSlot2, secondRowParameter);

                    firstSlotT1.play();
                    firstSlotT2.play();
                    firstSlotT3.play();
                    firstSlotT4.play();
                    firstSlotT5.play();
                    secondSlotT1.play();
                    secondSlotT2.play();
                    secondSlotT3.play();
                    secondSlotT4.play();
                    secondSlotT5.play();
                    thirdSlotT1.play();
                    thirdSlotT2.play();
                    thirdSlotT3.play();
                    thirdSlotT4.play();
                    thirdSlotT5.play();

                    if (row1 == "challenge" && row2 == "challenge" && row3 == "challenge") {
                        setTimeout(function () {
                            moveSpinToChallenge();
                        }, 3500);
                    } // go to Challenge
                }
            }


            //Взаимодействие с испытанием

            var i, flagEndGame = false;
            var challengeCurrentNumber, challengeTilesIdxToNumber = [];

            //player tiles
            tiles[9].on("pointerdown", function () {
                challengeCheckTile(0);
            });
            tiles[10].on("pointerdown", function () {
                challengeCheckTile(1);
            });
            tiles[11].on("pointerdown", function () {
                challengeCheckTile(2);
            });
            tiles[12].on("pointerdown", function () {
                challengeCheckTile(3);
            });
            tiles[13].on("pointerdown", function () {
                challengeCheckTile(4);
            });
            tiles[14].on("pointerdown", function () {
                challengeCheckTile(5);
            });
            tiles[15].on("pointerdown", function () {
                challengeCheckTile(6);
            });
            tiles[16].on("pointerdown", function () {
                challengeCheckTile(7);
            });
            tiles[17].on("pointerdown", function () {
                challengeCheckTile(8);
            });

            //check tiles clicks
            function challengeCheckTile(idx) {
                if (challengeTilesIdxToNumber[idx] == challengeCurrentNumber + 1) {
                    tiles[idx + 9].setInteractive(false);
                    indicators[challengeCurrentNumber + 27].setActive(true).setVisible(true);
                    challengeCurrentNumber++;
                }
                if (challengeCurrentNumber == 9) {
                    challengeEndGame(true);
                }
            }

            consolationPrizeButton.on("pointerdown", function () {
                gameSettings.currGold += parseInt(defeatTextMoney.text);
                moveChallengeToSpin(false);
            });
            victoryButton.on("pointerdown", function () {
                moveChallengeToSpin(true);
            });


            //to randomly distribute text on tiles
            function challengeFillTiles() {
                var i, j;

                //used array for already chosen tiles
                var used = [false * 9];
                for (i = 0; i < 9; i++) {
                    used[i] = false;
                }

                //for each tile we choose random number from not used
                for (i = 0; i < 9; i++) {
                    var randomNumber = Math.floor(Math.random() * (9 - i) - 0.0001);
                    for (j = 0; j < 9; j++) {
                        if (used[j] == false) {
                            if (randomNumber == 0) {
                                used[j] = true;
                                challengeTilesIdxToNumber[i] = j + 1;
                                randomNumber--;
                            } else {
                                randomNumber--;
                            }
                        }
                    }
                }

                //move texts on tiles
                for (i = 0; i < 9; i++) {
                    challengeTileTexts[challengeTilesIdxToNumber[i] - 1].x = tiles[i + 9].x;
                    challengeTileTexts[challengeTilesIdxToNumber[i] - 1].y = tiles[i + 9].y;

                    challengeTileTexts[challengeTilesIdxToNumber[i] - 1 + 9].x = tiles[i].x;
                    challengeTileTexts[challengeTilesIdxToNumber[i] - 1 + 9].y = tiles[i].y;
                }


            }

            //end challenge game and move to result
            function challengeEndGame(playerWon) {
                if (!flagEndGame) {
                    flagEndGame = true;
                    moveChallengeToResult(playerWon);
                }
            }

            //move from spin to challenge
            function moveSpinToChallenge() {
                flagEndGame = false;
                firstClick = false;
                spinsBG.setActive(false).setVisible(false);
                uiBackSpinButton.setActive(false).setVisible(false);
                uiSC.setActive(false).setVisible(false);
                goldText0.setActive(false).setVisible(false);
                spinGroup.getChildren().forEach(setAllVisible);

                function setAllVisible(element, index) {
                    element.setActive(false).setVisible(false);
                }
                var i;
                for (i = 0; i < challengeObjects.length; i++) {
                    challengeObjects[i].setActive(true).setVisible(true);
                }
                for (i = 0; i < 9; i++) {
                    indicators[i + 18].setActive(false).setVisible(false);
                    indicators[i + 27].setActive(false).setVisible(false);
                    tiles[i + 9].setInteractive(true);
                }
                challengeCurrentNumber = 0;
                challengeFillTiles();
                uiLikes.x = config.width * 0.76;
                uiLikes.y = config.height * 0.07;
                uiLikes.setActive(true).setVisible(true).setDepth(opponentAvatar.depth);
                startBot();
            }

            //move from challenge back to spin
            function moveChallengeToSpin(result) {

                var arr;
                if (result) {
                    arr = challengeVictoryObjects;
                } else {
                    arr = challengeDefeatObjects;
                }
                for (i = 0; i < arr.length; i++) {
                    arr[i].setActive(false).setVisible(false);
                }

                firstClick = false;
                spinsBG.setActive(true).setVisible(true);
                uiBackSpinButton.setActive(true).setVisible(true);
                uiSC.setActive(true).setVisible(true);
                uiSC.setX(config.width / 2).setY(config.height * 0.06).setDepth(1.2);
                goldText0.setActive(true).setVisible(true).setDepth(1.21).setX(config.width / 2).setY(config.height * 0.06);
                spinGroup.getChildren().forEach(setAllVisible);

                function setAllVisible(element, index) {
                    element.setActive(true).setVisible(true);
                }
            }

            //move to result of challenge
            function moveChallengeToResult(result) {

                var i;
                for (i = 0; i < challengeObjects.length; i++) {
                    challengeObjects[i].setActive(false).setVisible(false);
                }
                uiLikes.setActive(false).setVisible(false).setDepth(1);
                uiLikes.x = config.width * 0.63;
                uiLikes.y = config.height * 0.04;
                var arr;
                if (result) {
                    arr = challengeVictoryObjects;
                } else {
                    arr = challengeDefeatObjects;
                }
                for (i = 0; i < arr.length; i++) {
                    arr[i].setActive(true).setVisible(true);
                }
            }

            //bot functionality
            function startBot() {
                var a = Math.random();
                var i, time;
                if (a < 0.2) {
                    //fast (4-5 secs)
                    time = 0;
                    for (i = 0; i < 9; i++) {
                        time += Math.random() / 9 + 4 / 9;
                        makeIndicatorOnAfter(i, time * 1000);
                    }
                } else if (a < 0.7) {
                    //one stop (5-6.5 secs)
                    time = 0;
                    var st1 = Math.round((Math.random() * 5 + 2));
                    for (i = 0; i < 9; i++) {
                        if (i == st1) {
                            time += Math.random() * 5.5 / 9 + 0.82;
                        } else {
                            time += Math.random() / 9 + 4.7 / 9;
                        }
                        makeIndicatorOnAfter(i, time * 1000);
                    }

                } else {
                    //two stops(6.5-8 secs)
                    time = 0;
                    var st1 = Math.round((Math.random() * 2 + 1)),
                        st2 = Math.round((Math.random() * 2 + 5));
                    for (i = 0; i < 9; i++) {
                        if (i == st1 || i == st2) {
                            time += Math.random() * 3.25 / 9 + 8.25 / 9;
                        } else {
                            time += Math.random() / 9 + 6 / 9;
                        }

                        makeIndicatorOnAfter(i, time * 1000);
                    }
                }
                if (!flagEndGame) {
                    setTimeout(function () {
                        challengeEndGame(false);
                    }, time * 1000 + 100);
                }

            }
            var flagEndGame = false

            //make indicator green after time
            function makeIndicatorOnAfter(idx, time) {
                setTimeout(function () {
                    if (!flagEndGame) {
                        indicators[idx + 18].setActive(true).setVisible(true);
                    }
                }, time);


            }

        } // взаимодействия на экране спинов



        {
            var FixObjects = {
                "CurrentObject": false,

                //ORDER
                "Costs": {
                    "Wall": 500,
                    "Table": 900,
                    "Window": 1500,
                    "Kitchen": 2600,
                },

                "AreFixed": {
                    "Wall": false,
                    "Table": false,
                    "Window": false,
                    "Kitchen": false,
                },
                "UnfixedObjects": {
                    "Table": unfixedTable,
                    "Wall": unfixedWall,
                    "Kitchen": unfixedKitchen,
                    "Window": unfixedWindow,
                },
                "FixedObjects": {
                    "Table": fixedTable,
                    "Wall": fixedWall,
                    "Kitchen": fixedKitchen,
                    "Window": fixedWindow,
                },
                "buildingSmokes": {
                    "Table": buildingSmokes.table.objArr,
                    "Wall": buildingSmokes.wall.objArr,
                    "Kitchen": buildingSmokes.kitchen.objArr,
                    "Window": buildingSmokes.window.objArr,
                }
            }; // для взаимодействия с объектами кухни
            function getNextCost(text) {
                var cost = -1;
                FixObjects["CurrentObject"] = false;
                for (var object in FixObjects["Costs"]) {
                    if (!FixObjects["AreFixed"][object]) {
                        cost = FixObjects["Costs"][object];
                        FixObjects["CurrentObject"] = object;
                        break;
                    }
                }
                text.setText(cost);
            } // получаем цену первого сломанного объекта и сохраняем этот объект в FixObjects

            function closeUI() {
                uiGift.setActive(false).setVisible(false);
                uiCraft.setActive(false).setVisible(false);
                uiUpgrades.setActive(false).setVisible(false);
                uiPlay.setActive(false).setVisible(false);
                playText0.setActive(false).setVisible(false);
                uiMenu.setActive(false).setVisible(false);
                uiLikes.setActive(false).setVisible(false);
                menu.setVisible(false).setVisible(false);
                uiMenuBar.setActive(false).setVisible(false);
                uiNotificationsCounter.setActive(false).setVisible(false);
                uiNotificationsCounterText.setActive(false).setVisible(false);
            };

            function openUI() {
                uiGift.setActive(true).setVisible(true);
                uiCraft.setActive(true).setVisible(true);
                uiUpgrades.setActive(true).setVisible(true);
                uiCloseButton.setActive(false).setVisible(false);
                uiPlay.setActive(true).setVisible(true);
                playText0.setActive(true).setVisible(true);
                uiMenu.setActive(true).setVisible(true);
                uiLikes.setActive(true).setVisible(true);
                uiNotificationsCounter.setActive(true).setVisible(true);
                uiNotificationsCounterText.setActive(true).setVisible(true);
            }

            function closeOrOpenUpgrades(sign) {
                if (sign) {
                    getNextCost(uiTextGeneral);
                }
                if (!sign || uiTextGeneral.text != '-1') {
                    uiFixUpgradeGeneral.setActive(sign).setVisible(sign);
                    uiTextGeneral.setActive(sign).setVisible(sign);
                }
            } // перед показом корректируем цену





            uiCloseButton.on("pointerdown", function moveToMain() {
                openUI();
                closeOrOpenUpgrades(false);
            }); // если нажат крест, переходим на главный экран

            uiUpgrades.on("pointerdown", function moveToUpgrade() {
                closeUI();
                uiCloseButton.setActive(true).setVisible(true);
                closeOrOpenUpgrades(true);
            }); //если нажимаем апргейд, переходим на экран апргрейдов

            uiPlay.on("pointerdown", function openSpins() {

                spinsBG.setInteractive();
                spinsBG.setActive(true).setVisible(true);
                uiBackSpinButton.setActive(true).setVisible(true).setDepth(2);
                uiSC.setActive(true).setVisible(true);

                spinGroup.getChildren().forEach(setAllVisible);

                function setAllVisible(element, index) {
                    element.setActive(true).setVisible(true);
                };
                uiSC.setX(config.width / 2).setY(config.height * 0.06).setDepth(1.2);
                goldText0.setActive(true).setVisible(true).setDepth(1.21).setX(config.width / 2).setY(config.height * 0.06);
                closeUI();
            }); //если нажимаем кнопку "play", то открываются спины

            uiMenu.on("pointerdown", function openMenu() {
                closeUI();
                uiMenuBar.setActive(true).setVisible(true);
                uiLikes.setActive(false).setVisible(false);
                uiSC.setActive(false).setVisible(false);
                goldText0.setActive(false).setVisible(false);
                touchBar.setActive(true).setVisible(true).setAlpha(0.000000001);
                menu.setVisible(true);
            }); //при нажатии на кнопку меню - открываем меню

            touchBar.on("pointerdown", function closeMenu() {
                uiMenuBar.setActive(false).setVisible(false);
                openUI();
                uiSC.setActive(true).setVisible(true);
                goldText0
                    .setActive(true).setVisible(true);
                touchBar.setActive(false).setVisible(false);
                menu.setVisible(false);
            }); //при нажатии на любое место вне меню - выходим из меню

            uiGift.on("pointerdown", function openGifts() {
                uiGift.setActive(false).setVisible(false);
                uiNotificationsUnderlay.setActive(true).setVisible(true);
                uiNotificationsBackButton.setActive(true).setVisible(true);
                closeUI();
                uiSC.setX(config.width * 0.30);
                goldText0.setX(config.width * 0.33);
                uiEnergyBar.setActive(true).setVisible(true);
                energyText0.setVisible(true).setPosition(config.width * 0.73, config.height * 0.02).setColor("white");
                for (let i = 0; i < giftJSON.length; i++) {
                    notificationPanelsSprites[i].setActive(true).setVisible(true);
                    collectGiftSprites[i].setActive(true).setVisible(true);
                    senderTextSprites[i].setActive(true).setVisible(true);
                    typeTextSprites[i].setActive(true).setVisible(true);
                };
            }); // при нажатии на подарок 

            uiNotificationsBackButton.on("pointerdown", function closeGifts() {
                uiGift.setActive(true).setVisible(true);
                uiNotificationsUnderlay.setActive(false).setVisible(false);
                uiNotificationsBackButton.setActive(false).setVisible(false);
                openUI();
                uiSC.setX(initialSCX);
                goldText0.setX(initialSCX);
                uiEnergyBar.setActive(false).setVisible(false);
                energyText0.setVisible(false).setPosition(energyBar.x, energyBar.y * 0.97).setColor("purple");
                for (let i = 0; i < giftJSON.length; i++) {
                    notificationPanelsSprites[i].setActive(false).setVisible(false);
                    collectGiftSprites[i].setActive(false).setVisible(false);
                    senderTextSprites[i].setActive(false).setVisible(false);
                    typeTextSprites[i].setActive(false).setVisible(false);
                };
            }); // при нажатии на кнопку назад - закрываем экран уведомлений (подарков)

            uiBackSpinButton.on("pointerdown", function closeSpinsAndShop() {
                firstClick = false;
                spinsBG.setActive(false).setVisible(false);
                uiBackSpinButton.setActive(false).setVisible(false);
                uiSC.setX(initialSCX).setY(initialSCY);
                goldText0.setX(uiSC.x * 0.7).setY(uiSC.y * 0.55);
                goldText0.setX(initialSCX).setY(initialSCY);
                spinGroup.getChildren().forEach(setAllVisible);

                function setAllVisible(element, index) {
                    element.setActive(false).setVisible(false);
                };
                openUI();
            }); // при нажатии на кнопку назад - закрываем либо спины, либо магазин

            var prevUIScOpts, prevUIScTextOpts, prevEnergyTextOpts, prevEnergyOpts;
            uiSC.on("pointerdown", function openShop(){
                let i;
                for(i=0; i<shopObjects.length; i++){
                    shopObjects[i].setActive(true).setVisible(true);
                }

                for(i=0; i<6; i++){
                    shopQuantityTexts[i].text=shopGoodOpts[i].quantity;
                    shopQuantityTexts[i].setFontSize(70-(shopQuantityTexts[i].text.length*3.5));
                    shopPrices[i].text=shopGoodOpts[i].price;
                    var p = shopGoodOpts[i].price;
                    if(p%10==1&&p%100!=11){
                        shopNames[i].text="голос";
                    }else if(p%10<5&&p%10>1&&Math.round(p%100/10)!=1){
                        shopNames[i].text="голоса";
                    }else{
                        shopNames[i].text="голосов";
                    }
                }
                for(i=0; i<9; i++){
                    shopCoins[i].play("coinGlow");
                    shopEnergies[i].play("energyGlow");
                }
                prevUIScOpts={"x":uiSC.x, "y":uiSC.y, "depth":uiSC.depth, "visibility":uiSC.active};
                prevUIScTextOpts={"x":goldText0.x, "y":goldText0.y, "depth":goldText0.depth, "visibility":goldText0.active};

                prevEnergyOpts={"x":uiEnergyBar.x, "y":uiEnergyBar.y, "depth":uiEnergyBar.depth, "visibility":uiEnergyBar.active};
                prevEnergyTextOpts={"x":energyText0.x, "y":energyText0.y, "depth":energyText0.depth, "visibility":energyText0.active,
                                    "origin": [energyText0.originX, energyText0.originY], "color":energyText0.style.color, "fontFamily":energyText0.style.fontFamily};
                uiSC.disableInteractive();
                uiSC.setDepth(4.2);
                uiSC.setActive(true).setVisible(true);
                uiSC.x=config.width*0.36;
                uiSC.y=config.height*0.06;

                uiEnergyBar.setActive(true).setVisible(true).setDepth(4.2);

                uiEnergyBar.x=config.width*0.75;
                uiEnergyBar.y=config.height*0.06;
                

                goldText0.setActive(true).setVisible(true);
                goldText0.setDepth(4.3);
                goldText0.setX(uiSC.x).setY(uiSC.y);

                energyText0.x=uiEnergyBar.x;
                energyText0.y=uiEnergyBar.y;
                energyText0.setDepth(4.3);
                energyText0.setActive(true).setVisible(true);
                energyText0.setFontFamily("font1");
                energyText0.setColor("white");
                energyText0.setOrigin(0.25, 0.5);

                
                
            }); // при нажатии на голду открываем магазин 

            uiBackShopButton.on("pointerdown", function closeShop() {
                var i;
                for(i=0; i<shopObjects.length; i++){
                    shopObjects[i].setActive(false).setVisible(false);
                }
                uiSC.setX(prevUIScOpts.x).setY(prevUIScOpts.y);
                uiSC.setActive(prevUIScOpts.visibility).setVisible(prevUIScOpts.visibility);
                uiSC.setDepth(prevUIScOpts.depth);
                uiSC.setInteractive();

                goldText0.setActive(prevUIScTextOpts.visibility).setVisible(prevUIScTextOpts.visibility);
                goldText0.setX(prevUIScTextOpts.x).setY(prevUIScTextOpts.y);
                goldText0.setDepth(prevUIScTextOpts.depth);

                uiEnergyBar.setX(prevEnergyOpts.x).setY(prevEnergyOpts.y);
                uiEnergyBar.setActive(prevEnergyOpts.visibility).setVisible(prevEnergyOpts.visibility);
                uiEnergyBar.setDepth(prevEnergyOpts.depth);

                energyText0.setX(prevEnergyTextOpts.x).setY(prevEnergyTextOpts.y);
                energyText0.setActive(prevEnergyTextOpts.visibility).setVisible(prevEnergyTextOpts.visibility);
                energyText0.setDepth(prevEnergyTextOpts.depth);
                energyText0.setColor(prevEnergyTextOpts.color);
                energyText0.setOrigin(prevEnergyTextOpts.origin[0], prevEnergyTextOpts.origin[1]);
                energyText0.setFontFamily(prevEnergyTextOpts.fontFamily);
            });

            {
                uiFixUpgradeGeneral.on("pointerdown", function upgradeCurrObject() {
                    var currObj = FixObjects["CurrentObject"];
                    startUpgrade(FixObjects["UnfixedObjects"][currObj],
                        FixObjects["FixedObjects"][currObj],
                        uiFixUpgradeGeneral, uiTextGeneral);
                });

                function startUpgrade(element, newElement, upgradeBar, upgradeText) {
                    upgradeBar.setActive(false).setVisible(false);
                    upgradeText.setActive(false).setVisible(false);
                    goldOperation(-upgradeText.text);

                    var currObj = FixObjects["CurrentObject"];
                    var smokes = FixObjects["buildingSmokes"][currObj];
                    var max = 0,
                        idx = 0;
                    smokes.forEach(function (smoke, index, array) {

                        smoke.on('animationcomplete', function () {
                            smoke.setActive(false).setVisible(false);
                        });
                        var r = Math.random();
                        if (max < r) {
                            max = r;
                            idx = index;
                        }
                        setTimeout(function () {
                            smoke.setActive(true).setVisible(true);
                            smoke.play("buildingSmoke");
                            if (index == 0) {
                                setTimeout(function () {
                                    element.destroy();
                                    newElement.setActive(true).setVisible(true);
                                }, 3000);
                            }
                        }, 1000 * r + 500);
                    });
                    smokes[idx].on('animationcomplete', function () {
                        smokes[idx].setActive(false).setVisible(false);
                        finishUpgrade(element, newElement, upgradeBar, upgradeText);
                    });


                } // функция начала улучшения предмета

                function finishUpgrade(element, newElement, upgradeBar, upgradeText) {
                    FixObjects["AreFixed"][FixObjects["CurrentObject"]] = true;
                    getNextCost(upgradeText);
                    if (uiCloseButton.visible && upgradeText.text != '-1') {
                        upgradeBar.setActive(true).setVisible(true);
                        upgradeText.setActive(true).setVisible(true);
                    }
                } // функция завершения улучшения предмета

                function goldOperation(sum) {
                    gameSettings.currGold += sum;
                }
            } // взаимодействия на экране апгрейдов

            {
                var musicFlag = true,
                    soundFlag = true;
                fixMenuText.on("pointerdown", function openMenu() {
                    uiCloseButton.setActive(true).setVisible(true);
                    touchBar.setActive(false).setVisible(false);
                    closeUI();
                    menu.setVisible(false).setVisible(false);
                    uiMenuBar.setActive(false).setVisible(false);
                    uiSC.setActive(true).setVisible(true);
                    goldText0
                        .setActive(true).setVisible(true);

                    closeOrOpenUpgrades(true);
                }); // при нажатии на Ремонт в меню переходим в ремонт

                buyMenuText.on("pointerdown", function openShop() {
                    let i;
                    for(i=0; i<shopObjects.length; i++){
                        shopObjects[i].setActive(true).setVisible(true);
                    }

                    for(i=0; i<6; i++){
                        shopQuantityTexts[i].text=shopGoodOpts[i].quantity;
                        shopQuantityTexts[i].setFontSize(70-(shopQuantityTexts[i].text.length*3.5));
                        shopPrices[i].text=shopGoodOpts[i].price;
                        var p = shopGoodOpts[i].price;
                        if(p%10==1&&p%100!=11){
                            shopNames[i].text="голос";
                        }else if(p%10<5&&p%10>1&&Math.round(p%100/10)!=1){
                            shopNames[i].text="голоса";
                        }else{
                            shopNames[i].text="голосов";
                        }
                    }
                    for(i=0; i<9; i++){
                        shopCoins[i].play("coinGlow");
                        shopEnergies[i].play("energyGlow");
                    }
                    prevUIScOpts={"x":uiSC.x, "y":uiSC.y, "depth":uiSC.depth, "visibility":uiSC.active};
                    prevUIScTextOpts={"x":goldText0.x, "y":goldText0.y, "depth":goldText0.depth, "visibility":goldText0.active};

                    prevEnergyOpts={"x":uiEnergyBar.x, "y":uiEnergyBar.y, "depth":uiEnergyBar.depth, "visibility":uiEnergyBar.active};
                    prevEnergyTextOpts={"x":energyText0.x, "y":energyText0.y, "depth":energyText0.depth, "visibility":energyText0.active,
                                        "origin": [energyText0.originX, energyText0.originY], "color":energyText0.style.color, "fontFamily":energyText0.style.fontFamily};
                    uiSC.disableInteractive();
                    uiSC.setDepth(4.2);
                    uiSC.setActive(true).setVisible(true);
                    uiSC.x=config.width*0.36;
                    uiSC.y=config.height*0.06;

                    uiEnergyBar.setActive(true).setVisible(true).setDepth(4.2);

                    uiEnergyBar.x=config.width*0.75;
                    uiEnergyBar.y=config.height*0.06;
                    

                    goldText0.setActive(true).setVisible(true);
                    goldText0.setDepth(4.3);
                    goldText0.setX(uiSC.x).setY(uiSC.y);

                    energyText0.x=uiEnergyBar.x;
                    energyText0.y=uiEnergyBar.y;
                    energyText0.setDepth(4.3);
                    energyText0.setActive(true).setVisible(true);
                    energyText0.setFontFamily("font1");
                    energyText0.setColor("white");
                    energyText0.setOrigin(0.25, 0.5);
                }); // При нажатии на купить переходим в покупку

                playMenuText.on("pointerdown", function openSpins() {
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
                    menu.setVisible(false);
                }

                settingsMenuText.on("pointerdown", function () {

                    touchBar.setActive(false).setVisible(false);
                    closeUI();
                    menu.setVisible(false).setVisible(false);
                    uiMenuBar.setActive(false).setVisible(false);
                    openSettings();
                });

                soundToggleOn.on("pointerdown", function () {
                    soundFlag = !soundFlag;
                    soundToggleOff.setActive(true).setVisible(true);
                    soundToggleOn.setActive(false).setVisible(false);
                });

                soundToggleOff.on("pointerdown", function () {
                    soundFlag = !soundFlag;
                    soundToggleOn.setActive(true).setVisible(true);
                    soundToggleOff.setActive(false).setVisible(false);
                });

                musicToggleOn.on("pointerdown", function () {
                    musicFlag = !musicFlag;
                    musicToggleOff.setActive(true).setVisible(true);
                    musicToggleOn.setActive(false).setVisible(false);
                });

                musicToggleOff.on("pointerdown", function () {

                    musicFlag = !musicFlag;
                    musicToggleOn.setActive(true).setVisible(true);
                    musicToggleOff.setActive(false).setVisible(false);
                });

                settingsBackButton.on("pointerdown", function () {
                    closeSettings();
                    openUI();
                    uiSC.setActive(true).setVisible(true);
                    goldText0
                        .setActive(true).setVisible(true);
                });

                function openSettings() {
                    var i;
                    for (i = 0; i < settingsObjects.length; i++) {
                        settingsObjects[i].setVisible(true).setActive(true);
                    }
                    if (soundFlag) {
                        soundToggleOff.setActive(false).setVisible(false);
                    } else {
                        soundToggleOn.setActive(false).setVisible(false);
                    }
                    if (musicFlag) {
                        musicToggleOff.setActive(false).setVisible(false);
                    } else {
                        musicToggleOn.setActive(false).setVisible(false);
                    }
                }

                function closeSettings() {
                    var i;
                    for (i = 0; i < settingsObjects.length; i++) {
                        settingsObjects[i].setVisible(false).setActive(false);
                    }
                }

                levelsMenuText.on("pointerdown", function openMenu() {
                    touchBar.setActive(false).setVisible(false);
                    closeUI();
                    menu.setVisible(false).setVisible(false);
                    uiMenuBar.setActive(false).setVisible(false);
                    
                    updateLevels();
                    levelsBackButton.setVisible(true).setActive(true);
                    levelPanel.setVisible(true).setActive(true);
                }); // при нажатии на уровни, переходим к уровням

                function updateLevels(){
                    levelObjects = [];
                    for(let i=0; i<levelTexts.length; i++){
                        let rows=4, proportions=[5, 0, 2, 8];
                        if(gameSettings.currentLevel==i){
                            rows=3;
                            proportions=[1, 0, 2];
                        }
                        levelObjects[i] = _scene.rexUI.add.gridSizer({
                            height : config.height*0.65,
                            width : config.width*0.58,
                            column: 1,
                            row: rows,
                            rowProportions: proportions,
                            space: { column: 0, row: 0, top: config.height*0.3 },
                            name: i  // Search this name to get table back
                        })
                            .addBackground(levelDoorObjects[i], { expand: false })
                            .add(levelTextObjects[i], { expand: false, })
                            .add(_scene.rexUI.add.roundRectangle(0, 0, config.width*0.58, 0, 0, 0x000000).setDepth(1.2), 
                                { expand: false }, {align: 'center'});
                        if(gameSettings.currentLevel==i){
                            let button = _scene.rexUI.add.overlapSizer({})
                                .add(levelEnterButton, 'bg', 'center').add(levelEnterText, {align: 'center', expand: false});
                            levelObjects[i].add(button, { expand: false, });
                        }else if(gameSettings.currentLevel>i){
                            levelObjects[i].add(_scene.add.text(0, 0, "Пройдено", {
                                                fontFamily: 'font1',
                                                fontSize: '55px',
                                                color: "black",
                                                align: "center"
                                            }).setDepth(1.2), { padding : { top : config.height*0.1, bottom: config.height*0.02 }, expand: false, })
                            .add(_scene.add.sprite(0, 0, "mediumCheck").setDepth(1.2), { expand: false, });
                        }else{
                            levelObjects[i].add(_scene.add.text(0, 0, "Заблокировано", {
                                                fontFamily: 'font1',
                                                fontSize: '55px',
                                                color: "black",
                                                align: "center"
                                            }).setDepth(1.2), { padding : { top : config.height*0.1, bottom: config.height*0.02},  expand: false })
                            .add(_scene.add.sprite(0, 0, "iconLock").setDepth(1.2), { expand: false, });
                        }
                            
                    }

                    levelPanel = _scene.rexUI.add.scrollablePanel({
                        x : config.width*0.5,
                        y : config.height*0.5,

                        width : config.width, 
                        height : config.height,

                        scrollMode : 1,

                        background : levelBackground.setVisible(true).setActive(true), 

                        panel: {
                            child: createLevels(_scene),
                        },

                    }).layout();

                    function createLevels(scene){
                        var gridSizer = scene.rexUI.add.gridSizer({

                            column: levelObjects.length,
                            row: 1,
                            rowProportions: 1,
                            space: { column: config.width*0.12, 
                                    left: config.width*0.21, 
                                    right: config.width*0.21,
                                    top: config.height*0.15,
                                    bottom: config.height*0.2 },
                            name: "sizer"   // Search this name to get table back
                        });

                        for(let i=0; i<levelObjects.length; i++){
                            gridSizer.add(levelObjects[i]);
                        }

                        return gridSizer;
                    }

                    levelPanel.setActive(false).setVisible(false);

                } // recreate Levels

                levelsBackButton.on("pointerdown", function () {
                    levelsBackButton.setVisible(false).setActive(false);
                    levelPanel.setVisible(false).setActive(false);
                    openUI();
                    uiSC.setActive(true).setVisible(true);
                    goldText0
                        .setActive(true).setVisible(true);
                });

                levelEnterButton.on("pointerdown", function () {
                    // gameSettings.currentLevel++;
                    levelsBackButton.setVisible(false).setActive(false);
                    levelPanel.setVisible(false).setActive(false);
                    openUI();
                    uiSC.setActive(true).setVisible(true);
                    goldText0
                        .setActive(true).setVisible(true);
                });




            } // взаимодействия на экране меню

            {
                var recipes = {
                    1: {
                        name: "Жареный Картофель",
                        progress: 0,
                        numberOfCrafts: 2, // количество полных крафтов
                        1: {
                            numberOfSteps: 2, // количество шагов, не включая итоговый 
                            1: {
                                name: "Картофель",
                                done: false,
                                cost: "200"
                            },
                            2: {
                                name: "Нож",
                                done: false,
                                cost: "Нарезать"
                            },
                            result: {
                                name: "Нарезанный картофель",
                                done: false,
                                transition: "instant"
                            }
                        },
                        2: {
                            numberOfSteps: 4,
                            1: {
                                name: "Нарезанный картофель",
                                done: false,
                                cost: ""
                            },
                            2: {
                                name: "Растительное масло",
                                done: false,
                                cost: "150"
                            },
                            3: {
                                name: "Соль",
                                done: false,
                                cost: "200"
                            },
                            4: {
                                name: "Сковорода",
                                done: false,
                                cost: "400"
                            },
                            result: {
                                name: "Жареный Картофель",
                                transition: "no"
                            }
                        }
                    }
                };

                var currCraftPage = 1; // текущая страница
                var stepX = config.width * 0.5; // координата Х для шага (неизменяемая)
                var stepY = config.height * 0.2; // координата Y для шага (изменяемая)
                uiCraft.on("pointerdown", function openCraft() {
                    craftGroup.setVisible(true);
                    closeUI();
                    uiSC.setDepth(1);
                    goldText0
                        .setDepth(1.1);
                    uiSC.setX(uiSC.x + 280);
                    goldText0
                        .setX(goldText0
                            .x + 280);
                    for (var subRecipe in recipes[currCraftPage]) { // проходимся по всем подрецептам
                        for (var i = 1; i <= subRecipe["numberOfSteps"]; i++) { // итератор для прохожденеия по шагам подрецептов
                            eval("var ${i} = this.add.sprite(${stepX*0.5}, ${stepY}, 'StepPictureUnderlay');");
                            eval("check${i}.setDepth(2).setVisible(true);")
                            stepY += 200;
                        }
                    }
                });

                uiBackCraftButton.on("pointerdown", function closeCraft() {
                    openUI();
                    craftGroup.setVisible(false);
                    uiSC.setX(uiSC.x - 280);
                    goldText0
                        .setX(goldText0
                            .x - 280);
                });
            } // взаимодействия на экране крафтов

            {
                goodUnderlays[0].on("pointerdown", function(){shopBuy(0)});
                goodUnderlays[1].on("pointerdown", function(){shopBuy(1)});
                goodUnderlays[2].on("pointerdown", function(){shopBuy(2)});

                goodUnderlays[3].on("pointerdown", function(){shopBuy(3)});
                goodUnderlays[4].on("pointerdown", function(){shopBuy(4)});
                goodUnderlays[5].on("pointerdown", function(){shopBuy(5)});

                function shopBuy(idx){
                    if(idx<3){
                        //energy
                        gameSettings.currEnergy+=parseInt(shopQuantityTexts[idx].text);
                    }else{
                        // money
                        gameSettings.currGold+=parseInt(shopQuantityTexts[idx].text);
                    }
                }
            } // взамодействия магазина

        } // взаимодействия объектов
    }


    update() {
        this.goldText.setText(gameSettings.currGold);
        this.energyText.setText(gameSettings.currEnergy);
    }
}
