import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../module/gift.dart';
import '../module/rank.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../module/notification.dart';

class PointPage extends StatefulWidget {
  const PointPage({Key? key}) : super(key: key);

  @override
  State<PointPage> createState() => PointPageState();
}

class PointPageState extends State<PointPage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          elevation: 0,
          shape: const Border(
            bottom: BorderSide(
              color: Color.fromRGBO(102, 102, 102, 0.08),
            ),
          ),
          backgroundColor: Colors.white,
          title: const Text(
            'Point',
            style: Font.subtitleLargeBold,
          ),
          centerTitle: false,
          actions: <Widget>[
            IconButton(
              icon: const Icon(
                FontAwesomeIcons.solidBell,
                color: Cl.brandPrimaryBase,
              ),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const NotificationPage(),
                  ),
                );
              },
            ),
          ],
          bottom: const TabBar(
            indicatorColor: Cl.brandPrimaryBase,
            tabs: [
              Tab(
                child: Text(
                  'Gift',
                  style: Font.subtitleSmallBold,
                ),
              ),
              Tab(
                child: Text(
                  'Rank',
                  style: Font.subtitleSmallBold,
                ),
              )
            ],
          ),
        ),
        body: const TabBarView(
          children: [
            GiftPage(),
            RankPage(),
          ],
        ),
      ),
    );
  }
}
