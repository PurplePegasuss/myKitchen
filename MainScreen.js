class MainScreen extends Phaser.Scene {
    constructor() {
        super("MainScreen");
    }



    preload() {
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
                frameWidth: 500,
                frameHeight: 500
            });

            this.load.spritesheet("Water", "assets/Sprites/Food/Food_Water.png", {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet("Yeast", "assets/Sprites/Food/Food_Yeast.png", {
                frameWidth: 500,
                frameHeight: 500
            });
        } // Food preload
    }


    create() {

        {
            var unfixedWall = this.add.sprite(0, 0, "unfixedWall");
            unfixedWall.setOrigin(0, 0);
            unfixedWall.setScale(2);

            var fixedWall = this.add.sprite(0, 0, "fixedWall");
            fixedWall.setOrigin(0, 0);
            fixedWall.setActive(false).setVisible(false);

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
            fixedTable.setActive(false).setVisible(false);

        } //спавним мебель

        {

            var uiSC = this.add.sprite(250, 100, "uiSC");
            uiSC.setScale(3.1);
            uiSC.setInteractive();

            this.goldText = this.add.text(uiSC.x - 60, uiSC.y - 30, gameSettings.currGold, {
                font: "64px Arial",
                color: "white"
            });

            var goldText0 = this.goldText;

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
            uiMenuBar.setScale(3.6);
            uiMenuBar.setInteractive();
            uiMenuBar.setActive(false).setVisible(false);

            var touchBar = this.add.sprite(0, config.height / 2, "uiMenuBar");
            touchBar.setScale(2.6, 4);
            touchBar.setActive(false).setVisible(false);
            touchBar.setInteractive();
        } // спавним UI

        {
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
            
            var recipesArr = [
                ""
            ]
        } // спавним элементы крафта

        {
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
            groupMenu.setVisible(false);
            groupMenu.getChildren().forEach(setAllInteractive);

            function setAllInteractive(element, index) {
                element.setInteractive();
            }
        } // спавним элементы меню


        {
            function closeUI() {
                uiCraft.setActive(false).setVisible(false);
                uiUpgrades.setActive(false).setVisible(false);
                uiPlay.setActive(false).setVisible(false);
                uiMenu.setActive(false).setVisible(false);
                uiLikes.setActive(false).setVisible(false);
                groupMenu.setVisible(false).setVisible(false);
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
                openUI();
                closeOrOpenUpgrades(false);
            }); // если нажат крест, переходим на главный экран

            uiUpgrades.on('pointerdown', function moveToUpgrade() {
                closeUI();
                uiCloseButton.setActive(true).setVisible(true);
                closeOrOpenUpgrades(true);
            }); //если нажимаем апргейд, переходим на экран апргрейдов

            uiPlay.on('pointerdown', function openSpins() {
                spinsStub.setActive(true).setVisible(true);
                uiBackSpinButton.setActive(true).setVisible(true);
                spinsStub.setDepth(2);
                uiBackSpinButton.setDepth(2.1);
                closeUI();
            }); //если нажимаем кнопку "play", то открываются спины

            uiMenu.on('pointerdown', function openMenu() {
                closeUI();
                uiMenuBar.setActive(true).setVisible(true);
                uiLikes.setActive(false).setVisible(false);
                uiSC.setActive(false).setVisible(false);
                goldText0
                    .setActive(false).setVisible(false);
                touchBar.setActive(true).setVisible(true);
                touchBar.setAlpha(0.000000001);
                groupMenu.setVisible(true);
            }); //при нажатии на кнопку меню - открываем меню

            touchBar.on('pointerdown', function closeMenu() {
                uiMenuBar.setActive(false).setVisible(false);
                openUI();
                uiSC.setActive(true).setVisible(true);
                goldText0
                    .setActive(true).setVisible(true);
                touchBar.setActive(false).setVisible(false);
                groupMenu.setVisible(false);
            }); //при нажатии на любое место вне меню - выходим из меню

            uiBackSpinButton.on('pointerdown', function closeSpinsAndShop() {
                spinsStub.setActive(false).setVisible(false);
                uiBackSpinButton.setActive(false).setVisible(false);
                openUI();
            }); // при нажатии на кнопку назад - закрываем либо спины, либо магащин

            uiSC.on('pointerdown', function openShop() {
                shopStub.setActive(true).setVisible(true);
                shopStub.setDepth(4);
                uiBackShopButton.setActive(true).setVisible(true);
                uiBackShopButton.setDepth(5);
            }); // при нажатии на голду открываем заглушку

            uiBackShopButton.on('pointerdown', function closeShop() {
                shopStub.setActive(false).setVisible(false);
                uiBackShopButton.setActive(false).setVisible(false);
            });

            {
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
                    uiMenuBar.setActive(false).setVisible(false);
                    uiSC.setActive(true).setVisible(true);
                    goldText0
                        .setActive(true).setVisible(true);

                    closeOrOpenUpgrades(true);
                }); // при нажатии на Ремонт в меню переходим в ремонт

                buyMenuText.on('pointerdown', function openShop() {
                    shopStub.setActive(true).setVisible(true);
                    uiBackShopButton.setActive(true).setVisible(true);
                    shopStub.setDepth(4);
                    uiBackShopButton.setDepth(5);
                }); // При нажатии на купить переходим в покупку 

                playMenuText.on('pointerdown', function openSpins() {
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
                    groupMenu.setVisible(false);
                }
            } // взаимодействия на экране меню

            {
                uiCraft.on('pointerdown', function openCraft() {
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

                uiBackCraftButton.on('pointerdown', function closeCraft() {
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
    }
}
