import 'package:flutter/material.dart';
import '../module/personal.dart';
import '../module/history.dart';
import '../module/home.dart';
import '../module/point.dart';
import '../res/color.dart';
import '../res/style.dart';

class Navbar extends StatefulWidget {
  const Navbar({Key? key}) : super(key: key);

  @override
  State<Navbar> createState() => NavbarState();
}

class NavbarState extends State<Navbar> {
  int selectedIndex = 0;
  List<BottomNavigationBarItem> bottomNavBarItems = const [
    BottomNavigationBarItem(
      icon: Icon(Icons.home_filled),
      activeIcon: Icon(
        Icons.home_filled,
        color: Cl.brandPrimaryBase,
      ),
      label: 'Home',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.point_of_sale),
      activeIcon: Icon(
        Icons.point_of_sale,
        color: Cl.brandPrimaryBase,
      ),
      label: 'Point',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.history),
      activeIcon: Icon(
        Icons.history,
        color: Cl.brandPrimaryBase,
      ),
      label: 'History',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.person),
      activeIcon: Icon(
        Icons.person,
        color: Cl.brandPrimaryBase,
      ),
      label: 'Me',
    ),
  ];

  List<Widget> pages = const [
    HomePage(),
    PointPage(),
    HistoryPage(),
    PersonalPage(),
  ];

  void onNavBarItemTapped(int index) {
    setState(
      () {
        selectedIndex = index;
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: pages[selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        selectedFontSize: 24,
        unselectedFontSize: 24,
        items: bottomNavBarItems,
        currentIndex: selectedIndex,
        type: BottomNavigationBarType.fixed,
        onTap: onNavBarItemTapped,
        selectedItemColor: Cl.brandPrimaryBase,
        unselectedItemColor: Cl.grayscaleAccent,
        showSelectedLabels: true,
        showUnselectedLabels: true,
        selectedLabelStyle:
            Font.link2xSmall.copyWith(color: Cl.brandPrimaryBase),
        unselectedLabelStyle:
            Font.link2xSmall.copyWith(color: Cl.grayscaleAccent),
      ),
    );
  }
}
