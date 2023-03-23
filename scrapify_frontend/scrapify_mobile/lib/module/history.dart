import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import '../module/confirmed.dart';
import '../module/finished.dart';
import '../module/matched.dart';
import '../module/pending.dart';
import '../module/notification.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../service/data_provider.dart';

class HistoryPage extends StatefulWidget {

  const HistoryPage({
    Key? key,

  }) : super(key: key);

  @override
  State<HistoryPage> createState() => HistoryPageState();
}

class HistoryPageState extends State<HistoryPage> {
  List<Map> products = [
    {
      'id': 1,
      'name': 'Old clothes',
      'weight': '2kg',
      'count': 'x2',
      'recipient': '3 matched',
      'status': 'pending',
    },
    {
      'id': 2,
      'name': 'Old clothes',
      'weight': '2kg',
      'count': 'x2',
      'recipient': '3 matched',
      'status': 'matched',
    },
    {
      'id': 3,
      'name': 'Old clothes',
      'weight': '2kg',
      'count': 'x2',
      'recipient': '3 matched',
      'status': 'confirmed',
    },
    {
      'id': 4,
      'name': 'Old clothes',
      'weight': '2kg',
      'count': 'x2',
      'recipient': '3 matched',
      'status': 'finished',
    },
  ];
  @override
  Widget build(BuildContext context) {

    return DefaultTabController(
      length: 4,
      child: Scaffold(
        appBar: AppBar(
          elevation: 0,
          shape: const Border(
            bottom: BorderSide(
              color: Color.fromRGBO(102, 102, 102, 0.08),
            ),
          ),
          backgroundColor: Colors.white,
          title:  Text(
            'History',
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
            labelPadding: EdgeInsets.all(2),
            tabs: [
              Tab(
                child: Text(
                  'Pending',
                  style: Font.subtitleSmallBold,
                ),
              ),
              Tab(
                child: Text(
                  'Matched',
                  style: Font.subtitleSmallBold,
                ),
              ),
              Tab(
                child: Text(
                  'Confirmed',
                  style: Font.subtitleSmallBold,
                ),
              ),
              Tab(
                child: Text(
                  'Finished',
                  style: Font.subtitleSmallBold,
                ),
              )
            ],
          ),
        ),
        body: TabBarView(
          children: [
            PendingPage(),
            MatchedPage(),
            ConfirmedPage(),
            FinishedPage(),
          ],
        ),
      ),
    );
  }
}
