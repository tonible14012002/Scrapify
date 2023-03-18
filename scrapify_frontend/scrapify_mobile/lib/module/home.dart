import 'package:flutter/material.dart';
import 'package:scrapify_mobile/module/event_info.dart';
import '../res/asset.dart';
import '../res/color.dart';
import '../res/style.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  late List<Map> event = [
    {
      'id': 1,
      'name': 'Event name',
      'address': 'Address name',
      'product': ['clothes', 'plastic', 'paper'],
      'time': '17/03 - 19/03',
    },
    {
      'id': 2,
      'name': 'Event name',
      'address': 'Address name',
      'product': ['clothes', 'plastic', 'paper'],
      'time': '17/03 - 19/03',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 24,
        ),
        scrollDirection: Axis.vertical,
        child: Column(
          children: [
            const TextField(
              decoration: InputDecoration(
                prefixIcon: Icon(Icons.search),
                hintText: 'Search a event',
                hintStyle: Font.textMedium,
                contentPadding: EdgeInsets.symmetric(
                  horizontal: 12,
                  vertical: 12,
                ),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(
                    Radius.circular(4),
                  ),
                  borderSide: BorderSide(
                    width: 1,
                    style: BorderStyle.solid,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
            ListView.builder(
              shrinkWrap: true,
              itemCount: event.length,
              itemBuilder: (context, index) {
                return InkWell(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => EventInfo(event: event[index]),
                      ),
                    );
                  },
                  child: Card(
                    elevation: 0,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 8,
                      ),
                      child: Row(
                        children: [
                          Image.asset(
                            Id.clothes,
                            width: 120,
                            height: 120,
                          ),
                          const SizedBox(width: 16),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  event[index]['name'],
                                  style: Font.subtitleMediumBold,
                                ),
                                const SizedBox(height: 6),
                                Text(
                                  event[index]['address'],
                                  style: Font.linkSmall,
                                ),
                                const SizedBox(height: 6),
                                Text(
                                  event[index]['time'],
                                  style: Font.linkXSmall.copyWith(
                                    color: Cl.grayscaleSubtleText,
                                  ),
                                ),
                                const SizedBox(height: 6),
                                Wrap(
                                  children: [
                                    Chip(
                                      label: Text(
                                        event[index]['product'][0],
                                        style: Font.text2xSmall,
                                      ),
                                      backgroundColor: Cl.brandPrimaryBg,
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(4),
                                      ),
                                    ),

                                    const VerticalDivider(),
                                    Chip(
                                      label: Text(
                                        event[index]['product'][1],
                                        style: Font.text2xSmall,
                                      ),
                                      backgroundColor: Cl.brandPrimaryBg,
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(4),
                                      ),
                                    ),

                                    const VerticalDivider(),
                                    Chip(
                                      label: Text(
                                        event[index]['product'][2],
                                        style: Font.text2xSmall,
                                      ),
                                      backgroundColor: Cl.brandPrimaryBg,
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(4),
                                      ),
                                    ),
                                  ],
                                )
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
