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
                frameHeight: 622,
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

        } // Settings Preload
        this.load.image("Icon_Music", "assets/Icons/Icon_Music.png");
        this.load.image("Icon_Sound", "assets/Icons/Icon_Sound.png");
        this.load.image("ToggleOff", "assets/UI/UI_ToggleOff.png");
        this.load.image("ToggleOn", "assets/UI/UI_ToggleOn.png");
        this.load.image("SettingsUnderlay", "assets/UI/UI_SettingsUnderlay.png"); {

        } // Shop Preload

        {

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
            uiEnergyBar.setActive(false).setVisible(false);

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
            uiBackSpinButton.setActive(false).setVisible(false).setDepth(1.11);

            var uiBackShopButton = this.add.sprite(config.width * 0.9, config.height * 0.95, "uiBackButton");
            uiBackShopButton.setInteractive();
            uiBackShopButton.setActive(false).setVisible(false);

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

            var slammingFridgeDoorObject = this.add.sprite(config.width * 0.645, config.height * 0.54, "slammingFridgeDoor")
            slammingFridgeDoorObject.setActive(false).setVisible(false).setInteractive().setDepth(1.105); //Depth to be higher than spinButton

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
                font: '108px Arial',
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

        } // спавним элементы магазина

        {

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
                    //console.log(upX);
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
                console.log(idx);
                console.log(challengeTilesIdxToNumber[idx]);
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
                    console.log(randomNumber);
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
                console.log(challengeTilesIdxToNumber);
                console.log(challengeTileTexts);

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
                uiSC.setX(config.width / 2).setY(config.height * 0.06).setDepth(1.1);
                goldText0.setActive(true).setVisible(true).setDepth(1.11).setX(config.width / 2).setY(config.height * 0.06);
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
                if (a < 0.1) {
                    //fast (4-5 secs)
                    console.log("fast bot");
                    time = 0;
                    for (i = 0; i < 9; i++) {
                        time += Math.random() / 9 + 4 / 9;
                        console.log(time);
                        makeIndicatorOnAfter(i, time * 1000);
                    }
                } else if (a < 0.7) {
                    //one stop (5-6.5 secs)
                    console.log("medium bot");
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
                    console.log("slow bot");
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
                        console.log('on');
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
                //console.log(cost);
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
                uiBackSpinButton.setActive(true).setVisible(true).setDepth(1.11);
                uiSC.setActive(true).setVisible(true);

                spinGroup.getChildren().forEach(setAllVisible);

                function setAllVisible(element, index) {
                    element.setActive(true).setVisible(true);
                };
                uiSC.setX(config.width / 2).setY(config.height * 0.06).setDepth(1.1);
                goldText0.setActive(true).setVisible(true).setDepth(1.11).setX(config.width / 2).setY(config.height * 0.06);
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

            uiSC.on("pointerdown", function openShop() {
                uiBackShopButton.setActive(true).setVisible(true);
                uiBackShopButton.setDepth(5);
            }); // при нажатии на голду открываем заглушку

            uiBackShopButton.on("pointerdown", function closeShop() {
                uiBackShopButton.setActive(false).setVisible(false);
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
                            console.log("finish");
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
                    console.log("f");
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
                    uiBackShopButton.setActive(true).setVisible(true);
                    uiBackShopButton.setDepth(5);
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
                    console.log("settings");
                    touchBar.setActive(false).setVisible(false);
                    closeUI();
                    menu.setVisible(false).setVisible(false);
                    uiMenuBar.setActive(false).setVisible(false);
                    openSettings();
                });

                soundToggleOn.on("pointerdown", function () {
                    soundFlag = !soundFlag;
                    console.log("sound: " + soundFlag);
                    soundToggleOff.setActive(true).setVisible(true);
                    soundToggleOn.setActive(false).setVisible(false);
                });

                soundToggleOff.on("pointerdown", function () {
                    soundFlag = !soundFlag;
                    console.log("sound: " + soundFlag);
                    soundToggleOn.setActive(true).setVisible(true);
                    soundToggleOff.setActive(false).setVisible(false);
                });

                musicToggleOn.on("pointerdown", function () {
                    musicFlag = !musicFlag;
                    console.log("music: " + musicFlag);
                    musicToggleOff.setActive(true).setVisible(true);
                    musicToggleOn.setActive(false).setVisible(false);
                });

                musicToggleOff.on("pointerdown", function () {

                    musicFlag = !musicFlag;
                    console.log("music: " + musicFlag);
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

        } // взаимодействия объектов
    }


    update() {
        this.goldText.setText(gameSettings.currGold);
        this.energyText.setText(gameSettings.currEnergy);
    }
}
