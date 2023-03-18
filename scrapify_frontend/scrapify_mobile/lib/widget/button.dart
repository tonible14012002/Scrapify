import 'package:flutter/material.dart';

import '../res/color.dart';
import '../res/style.dart';

class CustomButton extends StatefulWidget {
  final String name;
  final VoidCallback onPressed;
  const CustomButton({
    Key? key,
    required this.name,
    required this.onPressed,
  }) : super(key: key);

  @override
  State<CustomButton> createState() => CustomButtonState();
}

class CustomButtonState extends State<CustomButton> {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: widget.onPressed,
      style: const ButtonStyle(
        backgroundColor: MaterialStatePropertyAll(
          Cl.brandPrimaryBase,
        ),
      ),
      child: Text(
        widget.name,
        textAlign: TextAlign.center,
        style: Font.subtitleSmallBold.copyWith(
          color: Cl.brandPrimaryBg,
        ),
      ),
    );
  }
}
