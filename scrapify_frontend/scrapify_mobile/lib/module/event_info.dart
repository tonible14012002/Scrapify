import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../widget/button.dart';
import '../widget/tag.dart';
import 'organization_info.dart';

class EventInfo extends StatefulWidget {
  final Map event;
  const EventInfo({
    Key? key,
    required this.event,
  }) : super(key: key);

  @override
  State<EventInfo> createState() => EventInfoState();
}

class EventInfoState extends State<EventInfo> {
  void onDonateClick() {}
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
        leading: IconButton(
          padding: const EdgeInsets.symmetric(
            horizontal: 16,
            vertical: 0,
          ),
          icon: const Icon(
            Icons.arrow_back_ios_new,
            color: Cl.grayscaleText,
            size: 24,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: const Text(
          'Event information',
          style: Font.subtitleLargeBold,
        ),
        centerTitle: true,
      ),
      body: SizedBox(
        width: 1000,
        height: 1000,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: ListView(
                children: [
                  SizedBox(
                    height: 300,
                    width: double.infinity,
                    child:  Image.network(
                      widget.event['banner'],
                      width: 120,
                      height: 120,
                      fit: BoxFit.cover,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 24,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Wrap(
                          spacing: 8,
                          children: List.generate(
                            widget.event['categories'].length,
                                (int i) => CustomTag(
                              name: widget.event['categories'][i]['name'],
                            ),
                          ),
                        ),
                        const SizedBox(height: 24),
                        Text(
                          widget.event['name'],
                          style: Font.subtitleMediumBold,
                        ),
                        const SizedBox(height: 24),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text('Start time', style: Font.subtitleSmallBold,),
                            Text(
                              DateFormat('HH:mm:ss dd/MM/yyyy').format(
                                DateTime.parse(
                                  widget.event['start_time'],
                                ),
                              ),
                              style: Font.textMedium,
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text('End time', style: Font.subtitleSmallBold,),
                            Text(
                              DateFormat('HH:mm:ss dd/MM/yyyy').format(
                                DateTime.parse(
                                  widget.event['end_time'],
                                ),
                              ),
                              style: Font.textMedium,
                            ),
                          ],
                        ),


                        const SizedBox(height: 8),
                        ListTile(
                          leading: ClipOval(
                            child: CircleAvatar(
                              radius: 20,
                              child: Image.network(
                                widget.event['recipient_avatar'],
                                width: 120,
                                height: 120,
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                          title: Text(
                            widget.event['recipient_name'],
                            style: Font.subtitleMediumBold,
                          ),
                          onTap: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => const OrganizationInfo(),
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: SizedBox(
                width: double.infinity,
                child: CustomButton(
                  name: 'Donate',
                  onPressed: onDonateClick,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
