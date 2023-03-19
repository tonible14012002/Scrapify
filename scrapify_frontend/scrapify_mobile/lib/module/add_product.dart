import 'dart:io';

import 'package:flutter/material.dart';
import 'package:path_provider/path_provider.dart';
import 'package:image_picker/image_picker.dart';
import '../widget/button.dart';

import '../res/color.dart';
import '../res/style.dart';

class AddProduct extends StatefulWidget {
  const AddProduct({Key? key}) : super(key: key);

  @override
  State<AddProduct> createState() => AddProductState();
}

class AddProductState extends State<AddProduct> {
  File? imageFile;

  final formKey = GlobalKey<FormState>();
  final nameController = TextEditingController();
  final weightController = TextEditingController();
  final countController = TextEditingController();
  final descriptionController = TextEditingController();

  String? categorySelectedValue;
  List<String> categoryValues = [
    'clothes',
    'paper',
    'mental scrap',
    'plastic',
    'other',
  ];

  @override
  void dispose() {
    nameController.dispose();
    weightController.dispose();
    countController.dispose();
    descriptionController.dispose();
    super.dispose();
  }

  Future<void> openGallery() async {
    final pickedFile = await ImagePicker().getImage(source: ImageSource.gallery);
    setState(() {
      if (pickedFile != null) {
        imageFile = File(pickedFile.path);
      } else {
        print('No image selected.');
      }
    });
  }

  Future<void> openCamera() async {
    final pickedFile = await ImagePicker().getImage(source: ImageSource.camera);
    setState(() {
      if (pickedFile != null) {
        imageFile = File(pickedFile.path);
      } else {
        print('No image selected.');
      }
    });
  }

  Future<void> saveImage(File image) async {
    final directory = await getApplicationDocumentsDirectory();
    final imagePath = '${directory.path}/image.jpg';
    await image.copy(imagePath);
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
          'Add product',
          style: Font.subtitleLargeBold,
        ),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 0,
        ),
        child: Form(
          key: formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 24),
              const Text(
                "Name",
                style: Font.subtitleSmallBold,
              ),
              const SizedBox(height: 8),
              TextFormField(
                controller: nameController,
              ),
              const SizedBox(height: 24),
              const Text(
                "Weight",
                style: Font.subtitleSmallBold,
              ),
              const SizedBox(height: 8),
              TextFormField(
                controller: weightController,
              ),
              const SizedBox(height: 24),
              const Text(
                "Count",
                style: Font.subtitleSmallBold,
              ),
              const SizedBox(height: 8),
              TextFormField(
                controller: countController,
              ),
              const SizedBox(height: 24),
              const Text(
                "Category",
                style: Font.subtitleSmallBold,
              ),
              const SizedBox(height: 8),
              DropdownButton<String>(
                elevation: 0,
                dropdownColor: Colors.white,
                alignment: AlignmentDirectional.bottomEnd,
                value: categorySelectedValue,
                items: categoryValues.map(
                  (value) {
                    return DropdownMenuItem<String>(
                      value: value,
                      child: SizedBox(
                        width: double.infinity,
                        child: Text(value),
                      ),
                    );
                  },
                ).toList(),
                onChanged: (value) {
                  setState(
                    () {
                      categorySelectedValue = value;
                    },
                  );
                },
                isExpanded: true,
              ),
              const SizedBox(height: 24),
              const Text(
                "Images",
                style: Font.subtitleSmallBold,
              ),
              const SizedBox(height: 8),
              Center(
                child: imageFile == null
                    ? Text('No image selected.')
                    : Image.file(imageFile!),
              ),
              IconButton(
                onPressed: () {
                  showModalBottomSheet(
                    context: context,
                    builder: (BuildContext context) {
                      return Container(
                        child: Wrap(
                          children: [
                            ListTile(
                              leading: Icon(Icons.camera_alt),
                              title: Text('Take a photo'),
                              onTap: () {
                                Navigator.of(context).pop();
                                openCamera();
                              },
                            ),
                            ListTile(
                              leading: Icon(Icons.image),
                              title: Text('Choose from gallery'),
                              onTap: () {
                                Navigator.of(context).pop();
                                openGallery();
                              },
                            ),
                          ],
                        ),
                      );
                    },
                  );
                },
                icon: Icon(Icons.add_a_photo, color: Cl.brandPrimaryBase,),
              ),

              SizedBox(
                width: double.infinity,
                height: 44,
                child: CustomButton(
                  name: 'Post',
                  onPressed: () {},
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
