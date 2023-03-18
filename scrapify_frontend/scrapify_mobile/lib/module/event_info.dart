import 'package:flutter/material.dart';
import '../res/asset.dart';

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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: null,
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Column(
          children: [
            SizedBox(
              height: 360,
              child: Stack(
                children: [
                  SizedBox(
                    height: 300,
                    width: double.infinity,
                    child: Image.asset(
                      Id.clothes,
                      fit: BoxFit.cover,
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
