import 'package:flutter/material.dart';
import '../res/color.dart';
import '../res/style.dart';

class RankPage extends StatefulWidget {
  const RankPage({Key? key}) : super(key: key);

  @override
  State<RankPage> createState() => RankPageState();
}

class RankPageState extends State<RankPage> {
  List<Map> friends = [
    {'id': 1, 'name': 'Diệu Trinh', 'point': '2000', 'rank': '1'},
    {'id': 2, 'name': 'Xuân Ngọc', 'point': '1999', 'rank': '2'},
    {'id': 3, 'name': 'Nam Anh', 'point': '1998', 'rank': '3'},
    {'id': 4, 'name': 'Thiên Kim', 'point': '1997', 'rank': '4'},
  ];
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Card(
          color: Cl.brandPrimaryBase,
          margin: EdgeInsets.all(16),
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    children: [
                      Text(
                        'Current point',
                        style: Font.subtitleMediumBold
                            .copyWith(color: Colors.white),
                      ),
                      Text(
                        '1000 pts',
                        style: Font.subtitleMediumBold
                            .copyWith(color: Colors.white),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: Column(
                    children: [
                      Text(
                        'Your rank',
                        style: Font.subtitleMediumBold
                            .copyWith(color: Colors.white),
                      ),
                      Text(
                        '443',
                        style: Font.subtitleMediumBold
                            .copyWith(color: Colors.white),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        ListView.builder(
          padding: const EdgeInsets.all(16),
          shrinkWrap: true,
          itemCount: friends.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(
                friends[index]['name'],
                style: Font.subtitleMediumBold.copyWith(
                  color: Cl.brandPrimaryBase,
                ),
              ),
              subtitle: Text(
                friends[index]['point'],
              ),
              trailing: Text(
                friends[index]['rank'],
                style: Font.subtitleLargeBold.copyWith(
                  color: Cl.brandPrimaryBase,
                ),
              ),
            );
          },
        )
      ],
    );
  }
}
