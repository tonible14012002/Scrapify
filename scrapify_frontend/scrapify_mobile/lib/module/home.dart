import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:intl/intl.dart';
import '../widget/tag.dart';
import '../service/event.dart';
import '../module/notification.dart';
import '../module/event_info.dart';
import '../res/color.dart';
import '../res/style.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  List<Map> event = [];
  Future<void> getEvent() async {
    final response = await EventApi.getEvent();
    setState(() {
      event = response;
    });
  }

  @override
  void initState() {
    super.initState();
    getEvent();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        shape: const Border(
          bottom: BorderSide(
            color: Color.fromRGBO(102, 102, 102, 0.08),
          ),
        ),
        backgroundColor: Colors.white,
        title: const Text(
          'Home',
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
      ),
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
                prefixIcon: Icon(Icons.search, color: Cl.brandPrimaryBase,),
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
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                    color: Cl.brandPrimaryBase,
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
                          Image.network(
                            event[index]['banner'],
                            width: 120,
                            height: 120,
                            fit: BoxFit.cover,
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
                                  '${DateFormat('dd/MM').format(
                                    DateTime.parse(
                                      event[index]['start_time'],
                                    ),
                                  )} - ${DateFormat('dd/MM').format(
                                    DateTime.parse(
                                      event[index]['end_time'],
                                    ),
                                  )}',
                                  style: Font.linkXSmall.copyWith(
                                    color: Cl.grayscaleSubtleText,
                                  ),
                                ),
                                const SizedBox(height: 6),
                                Wrap(
                                  spacing: 8,
                                  children: List.generate(
                                    event[index]['categories'].length,
                                    (int i) => CustomTag(
                                      name: event[index]['categories'][i]
                                          ['name'],
                                    ),
                                  ),
                                ),
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
