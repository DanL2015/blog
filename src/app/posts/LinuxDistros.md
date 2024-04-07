---
title: "Choosing a Linux Distribution"
date: "2024-05-07"
tags: ["Linux"]
description: "Which Linux Distribution should beginners choose?"
---

## My Recommendations

If you are someone who is interested in switching to Linux, you should choose either Linux Mint or Endeavouros.
In this blog post, I'll go over why I specifically chose those two distributions and a lot of important information that everyone should know before using Linux.

### Linux Mint

Linux Mint is a distribution based on the popular Ubuntu Linux distribution.
Chances are, you have probably heard about Ubuntu before, since it is probably the most used distribution out there.  
Because Linux Mint is based off Ubuntu, it is able to use the same packages and software repositories as Ubuntu.
Since Ubuntu is so widely used, if a software has Linux support, it probably is compatible with Ubuntu, and, as a result, also with Linux Mint.
However, there are a few benefits that Linux Mint has over Ubuntu, which leads me to recommend Linux Mint over Ubuntu.

#### Canonical and Snap

The first issue I have with Ubuntu is that, by default, it uses Snap packages.
The Snap servers, first of all, are controlled by Canonical, which means that when you use Snap, you are not using fully open source software.
Chances are, if you are looking to switch to Linux, you are someone who prefers open source software, so this might conflict with your philosophy.
Another issue is that Snaps are normally slower than the default `.deb` packages than Linux Mint uses.
When using software bundled in Snap, you might find their startup time to be slower.

### Endeavouros

Endeavouros is a distribution based on the Arch Linux distribution.
Arch is a distribution whose advantage lies in the number of enthusiast users that it has.
It maintains a repository of software called the Arch User Repository (AUR), which contains thousands of user submitted packages.
Endeavouros is able to take advantage of this, allowing users to find almost any software they want.
However, one issue with this is that you may find malware on the AUR, so be careful when using it by making sure the packages you download are decently popular.
You can also look at the PKGBuild if you are extra paranoid, since it will tell you where the package will be downloaded from.

### Final Comparison

Both Linux Mint and Endeavouros are solid choices.
They both have large software repositories, basically ensuring that you will find all the packages you need.
The main difference between the two is how often their packages update.
With Linux Mint, you get more stable packages, while in Endeavouros, you get more bleeding-edge and the most recent packages.
In the end, it is up to you: would you rather get some slightly out of date but more tested packages, or the newest packages?

## Helpful Linux information

### Desktop Environments

One thing that people may get confused about when talking about Linux Distributions are desktop environments, or DEs.
You might hear that Linux Mint comes with the XFCE or Cinnamon desktop environment, while Ubuntu comes with the Gnome desktop environment.
Hopefully this part will clear up any misconceptions you have about DEs.
DEs are basically a bundle of software that ensure you have a usable desktop.
This includes anything from settings and theming software, a window manager to manage window placement, desktop icons and wallpaper, and a lot of other miscellaneous things that are necessary for your desktop to function.
It also includes basic tools, such as a file explorer.
Another thing to note is that for all Linux Distributions, you are able to install whatever DE you want.
For example, Linux Mint comes with Cinnamon and not Gnome, but you can very easily install Gnome.

Here is a list of desktop environments I would recommend:
1. XFCE
    - Pros: Stable, customizable, and lightweight.
    - Cons: Ugly and dated out of the box, requires customization.
2. Gnome
    - Pros: Stable and smooth.
    - Cons: High resource usage, against customization.
3. KDE
    - Pros: Highly customizable (built in store for customization), lightweight
    - Cons: Unstable

### Difference between Distributions
As someone who just daily drives Linux for normal work, there is only one major difference between Linux distributions: their software packages.
This includes both the commands you need to know to manage packages, and the packages you have available.

For example, in Linux Mint you would type `sudo apt-get install package` to install a package.

In Endeavouros you would type: `sudo pacman -Syu package`.

However, if your package is available in both distributions, there are virtually no differences between the two.