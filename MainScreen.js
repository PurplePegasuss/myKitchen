class MainScreen extends Phaser.Scene {
    constructor() {
        super("MainScreen");
    }



    preload() {

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


            this.load.spritesheet("building", "assets/Anim/Anim_Building/Anim_Building.png", {
                frameWidth: 360,
                frameHeight: 360
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

            this.load.image("spinButton", "assets/UI/UI_SpinButton.png");
            this.load.image("pressedSpinButton", "assets/UI/UI_PressedSpinButton.png");

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

            /*
            this.load.spritesheet("craftProgressBar", "???", {
                frameWidth: config.width,
                frameHeight: config.height,
            });
            */
            this.load.spritesheet("buyFoodButton", "assets/UI/UI_StepActionButton.png", {
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
            this.load.spritesheet("PirozhkiWithCabbage", "assets/Food/Food_PirozhkiWithCabbage.png", {
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
                frameWidth: 500,
                frameHeight: 500
            });

            this.load.spritesheet("Water", "assets/Food/Food_Water.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Yeast", "assets/Food/Food_Yeast.png", {
                frameWidth: 500,
                frameHeight: 500
            });
        } // Food Preload
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

            var buildingSmokeWindow = this.add.sprite(unfixedWindow.x, unfixedWindow.y, "building");
            buildingSmokeWindow.setActive(false).setVisible(false);

            var buildingSmokeWall1 = this.add.sprite(49*4, 49*4, "building");
            buildingSmokeWall1.setActive(false).setVisible(false);

            var buildingSmokeWall2 = this.add.sprite(172*4, 88*4, "building");
            buildingSmokeWall2.setActive(false).setVisible(false);

            var buildingSmokeTable1 = this.add.sprite(76*4, 303*4, "building");
            buildingSmokeTable1.setActive(false).setVisible(false);

            var buildingSmokeTable2 = this.add.sprite(210*4, 357*4, "building");
            buildingSmokeTable2.setActive(false).setVisible(false);

            var buildingSmokeTable3 = this.add.sprite(55*4, 427*4, "building");
            buildingSmokeTable3.setActive(false).setVisible(false);

            var buildingSmokeKitchen1 = this.add.sprite(config.width*0.79, config.height*0.175, "building");
            buildingSmokeKitchen1.setActive(false).setVisible(false);

            var buildingSmokeKitchen2 = this.add.sprite(config.width*0.5, config.height*0.45, "building");
            buildingSmokeKitchen2.setActive(false).setVisible(false);


        } //спавним мебель

        {

            var uiSC = this.add.sprite(config.width * 0.22, config.height * 0.04, "uiSC");
            uiSC.setInteractive();

            var initialSCX = uiSC.x;
            var initialSCY = uiSC.y;

            this.goldText = this.add.text(uiSC.x * 0.7, uiSC.y * 0.55, gameSettings.currGold, {
                font: "64px Arial",
                color: "white"
            });

            var goldText0 = this.goldText;

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

            var craftGroup = this.add.group([craftBar, leftArrow, rightArrow, craftBG, uiBackCraftButton]);
            craftGroup.setVisible(false);
            
            
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
                        3:{
                            name: "Соль",
                            done: false,
                            cost: "200"
                        },
                        4:{
                            name: "Сковорода",
                            done: false,
                            cost: "400"
                        },
                        result:{
                            name: "Жареный Картофель",
                            transition: "no"
                        }
                    }
                }
            }
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
                repeat: -1,
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
                frames: this.anims.generateFrameNumbers("slammingFridgeDoor"),
                repeat: 1
            });


            this.anims.create({
                key: "buildingSmoke",
                frames: this.anims.generateFrameNumbers("building"),
                repeat: 0,
                frameRate: 1,
            });

            var spinButton = this.add.sprite(config.width * 0.45, config.height * 0.9, "spinButton");
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

            var shopStub = this.add.sprite(config.width / 2, config.height / 2, "shopStub");
            shopStub.setScale(3);
            shopStub.setActive(false).setVisible(false);



            var spinGroup = this.add.group([spinsBG, fridgeRear, fridgeFrame, fridgeShadow, fridgeDoor, spinButton, energyBar, energyIcon, energyText0, firstSlot1, secondSlot1, thirdSlot1, firstSlot2, secondSlot2, thirdSlot2, firstSlot3, secondSlot3, thirdSlot3, firstSlotB1, secondSlotB1, firstSlotB2, secondSlotB2, firstSlotB3, secondSlotB3]);

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
                console.log(argument);
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

                    randomFrame(firstSlot1, secondSlot1, thirdSlot1, firstRowParameter);
                    randomFrame(firstSlot3, secondSlot3, thirdSlot3, thirdRowParameter);
                    randomFrame(firstSlot2, secondSlot2, thirdSlot2, secondRowParameter);

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
                }
            }

        } // взаимодействия на экране спинов



        {
            var FixObjects = {
                "CurrentObject": false,
                "Costs": {
                    "Table": 100,
                    "Wall": 200,
                    "Kitchen": 300,
                    "Window": 400,
                },
                "AreFixed": {
                    "Table": false,
                    "Wall": false,
                    "Kitchen": false,
                    "Window": false,
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
                "buildingSmokes" : {
                    "Table": [buildingSmokeTable1, buildingSmokeTable2, buildingSmokeTable3],
                    "Wall": [buildingSmokeWall1, buildingSmokeWall2],
                    "Kitchen": [buildingSmokeKitchen1, buildingSmokeKitchen2],
                    "Window": [buildingSmokeWindow],
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
                console.log(cost);
                text.setText(cost);
            } // получаем цену первого сломанного объекта и сохраняем этот объект в FixObjects

            function closeUI() {
                uiCraft.setActive(false).setVisible(false);
                uiUpgrades.setActive(false).setVisible(false);
                uiPlay.setActive(false).setVisible(false);
                uiMenu.setActive(false).setVisible(false);
                uiLikes.setActive(false).setVisible(false);
                menu.setVisible(false).setVisible(false);
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
                if(sign){
                    getNextCost(uiTextGeneral);
                }
                if(!sign||uiTextGeneral.text!='-1'){
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
                shopStub.setActive(true).setVisible(true);
                shopStub.setDepth(4);
                uiBackShopButton.setActive(true).setVisible(true);
                uiBackShopButton.setDepth(5);
            }); // при нажатии на голду открываем заглушку

            uiBackShopButton.on("pointerdown", function closeShop() {
                shopStub.setActive(false).setVisible(false);
                uiBackShopButton.setActive(false).setVisible(false);
            });

            {
                uiFixUpgradeGeneral.on("pointerdown", function upgradeCurrObject() {
                    var currObj = FixObjects["CurrentObject"];
                    startUpgrade(FixObjects["UnfixedObjects"][currObj],
                        FixObjects["FixedObjects"][currObj],
                        uiFixUpgradeGeneral, uiTextGeneral);
                });

                function startUpgrade(element, newElement, upgradeBar, upgradeText){
                    upgradeBar.setActive(false).setVisible(false);
                    upgradeText.setActive(false).setVisible(false);
                    goldOperation(-upgradeText.text);
                    
                    var currObj = FixObjects["CurrentObject"];
                    var smokes = FixObjects["buildingSmokes"][currObj];
                    smokes.forEach(function(smoke, index, array) {
                        smoke.on('animationcomplete', function(){
                            smoke.setActive(false).setVisible(false);
                            if(index==array.length-1){
                                finishUpgrade(element, newElement, upgradeBar, upgradeText);
                            }
                        });
                        setTimeout(function(){
                            smoke.setActive(true).setVisible(true);
                            smoke.play("buildingSmoke");
                        }, 100*index);
                    });
                    

                } // функция начала улучшения предмета

                function finishUpgrade(element, newElement, upgradeBar, upgradeText){
                    element.destroy();
                    newElement.setActive(true).setVisible(true);
                    FixObjects["AreFixed"][FixObjects["CurrentObject"]]=true;
                    getNextCost(upgradeText);
                    if(uiCloseButton.visible&&upgradeText.text!='-1'){
                        upgradeBar.setActive(true).setVisible(true);
                        upgradeText.setActive(true).setVisible(true);
                    }
                } // функция завершения улучшения предмета

                function goldOperation(sum){
                    gameSettings.currGold+=sum;
                } // операция с золотом

            } // взаимодействия на экране апгрейдов

            {
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
                    shopStub.setActive(true).setVisible(true);
                    uiBackShopButton.setActive(true).setVisible(true);
                    shopStub.setDepth(4);
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
            } // взаимодействия на экране меню

            {
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
