---
title: OpenWrt is the perfect companion for the ZimaBoard eMMC burn-in version
---

# Topics

With a ZimaBoard performance somewhere between a Raspberry Pi and a MicroServer and a price positioning, the best use for the ZimaBoard for many gamers is undoubtedly to be a hundred-dollar, customizable, OpenWrt / pfSense x86 router with enough arithmetic power.

Based on this simple tutorial, we will share how to use the ZimaBoard's pre-built system, and after a few steps, paving the way for you to play around with the routing system you are familiar with.

# Preparation

1. PC Host x1
2. ZimaBoard x1 (connected to the same LAN as the PC)
3. your favourite x86 OpenWrt Image or download the image recommended by the team via this link


> **Tips：**
>1. This tutorial will install OpenWrt directly onto the ZimaBoard's eMMC and overwrite and remove the pre-installed operating system . Please also save and backup your original system user data!
>2. OpenWrt Image, e.g. an image file with the .img suffix! If the .gz


# Operation steps

## Log in to the system

On the PC, log in to ZimaBoard's CasaOS panel via ```casaos.local```

![Openwrt eMMc Boot Log In CasaOS](/images/Openwrt-emmc-boot/openwrt-emmc-boot-log-in-casaos.png)


## Upload the OpenWrt image
**1. Upload the OpenWrt image prepared on your PC to the ZimaBoard storage**
  a.Click on the Files application, select a directory and click on the Upload files button

**2. From the local path, select Upload your OpenWrt image**

**3. From the local path, select Upload your OpenWrt image**

![Upload The OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image.png)

**4.Waiting for the upload to complete**

![Upload The OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image2.png)

## OpenWrt system writes to eMMc
1. Write the OpenWrt Image to the ZimaBoard eMMC using the DD command
    a.Login to the ZimaBoard system via Terminal, SSH on your PC（Terminal out connection, need to know the IP address of your machine）

![OpenWRT Connect SSH](/images/Openwrt-emmc-boot/openwrt-emmc-boot-connect-ssh.png)

2. Log in with your CasaOS account and password
{% note danger %}
Default Account Password
   Account： `casaos`
   Password：`casaos`
{% endnote %}

3. Enter lsblk and review to see if you are getting the target eMMC name, which should be mmcblk0

![](/images/Openwrt-emmc-boot/openwrt-emmc-boot-find-emmc-name.png)

4. Unzip the image file (if your OpenWrt file is a zip archive)
```
gzip -d [.gz or .img.gz image name]
```
![Unzip OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-unzip-image-file.png)

5. Check that the decompression is working! Make sure there are no abnormalities in the image file
```bash
ls -lh
```
- Enter the following DD command to write the OpenWrt image uploaded to the ZimaBoard to the eMMC!

  1. Make sure your image path matches the location and filename of the folder you uploaded!
  2. Make sure your written image has a .img extension! and not a zip file!

    ```bash
    sudo dd if=/DATA/[upload path]/[name.img] of=/dev/mmcblk0 bs=1024k status=progress
    ```
- After the DD command has been executed, power off and reapply power to the ZimaBoard.

## login OpenWrt system
1. Configure your OpenWrt system IP address information and use a PC browser to log into the OpenWrt Luci page

    {% note danger %}
    Attached is a tutorial on the OpenWrt IP address configuration command
    https://openwrt.org/docs/guide-user/network/openwrt_as_routerdevice
    {% endnote %}

2. Reboot and log in to your OpenWrt system
   
![Enter To Openwrt Luci](/images/Openwrt-emmc-boot/openwrt-emmc-boot-enter-to-openwrt-luci.png)

# Summary
My personal preference is to run purely a separate system and service on each ZimaBoard. So, instead of booting OpenWrt on the ZimaBoard with a USB stick, this is actually a much simpler way. If you are interested in having your ZimaBoard running dual systems at the same time, consider making a USB stick and switch the system the ZimaBoard is logged into via the Bios configuration.

For those further interested in running CasaOS on your OpenWrt system, check out the tutorial!

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)