import 'package:flutter/material.dart';

import '../res/color.dart';
import '../res/style.dart';

class CustomTag extends StatefulWidget {
  final String name;
  const CustomTag({
    Key? key,
    required this.name,
  }) : super(key: key);

  @override
  State<CustomTag> createState() => CustomTagState();
}

class CustomTagState extends State<CustomTag> {
  @override
  Widget build(BuildContext context) {
    return Chip(
      label: Text(
        widget.name,
        style: Font.textSmall,
      ),
      backgroundColor: Cl.brandPrimaryBg,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(4),
        side: const BorderSide(
          width: 1,
          style: BorderStyle.solid,
          color: Cl.brandPrimaryBase,
        ),
      ),
    );
  }
}
