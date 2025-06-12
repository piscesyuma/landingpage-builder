import { ElementType } from "../types/builder";

const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

const createHeaderContainer = () => ({
  id: generateId(),
  type: 'container' as ElementType,
  styles: {
    backgroundColor: '#FFFFFF',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  children: [
    {
      id: generateId(),
      type: 'container' as ElementType,
      styles: {
        backgroundColor: '#FFFFFF',
        padding: '0 0 0 0',
        display: 'flex',
        justifyContent: 'space-between',
      },
      children: [
        {
          id: generateId(),
          type: 'heading' as ElementType,
          content: "FORTI",
          styles: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#000',
            margin: '0',
          }
        },
        {
          id: generateId(),
          type: 'heading' as ElementType,
          content: "GOLD",
          styles: {
            fontSize: '32px',
            fontWeight: 'normal',
            color: '#000',
            margin: '0',
          }
        }
      ]
    }, 
    {
      id: generateId(),
      type: 'container' as ElementType,
      styles: {
        backgroundColor: '#FFFFFF',
        padding: '0 0 0 0',
        display: 'flex',
        alignItems: 'center',
        gap: '64px',
      },
      children: [
        {
          id: generateId(),
          type: 'heading' as ElementType,
          content: "About",
          styles: {
            backgroudColor: '#ffffff00',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            color: '#000',
          }
        },
        {
          id: generateId(),
          type: 'heading' as ElementType,
          content: "Benefits",
          styles: {
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            color: '#000',
          }
        },
        {
          id: generateId(),
          type: 'heading' as ElementType,
          content: "FAQ",
          styles: {
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            color: '#000',
          }
        }, 
        {
          id: generateId(),
          type: 'button' as ElementType,
          content: "ORDER NOW",
          styles: {
            backgroundColor: "#FBBC04",
            color: '#000',
            padding: '16px 24px',
            borderRadius: '16px',
            fontWeight: '600',
            fontStyle: 'normal',
            fontSize: '20px',
            cursor: 'pointer',
          },
        }
      ]
    }
  ]
});

const createFirstSectionContainer = () => {
  const titlePart = {
    id: generateId(),
    type: 'container' as ElementType,
    styles: {
      backgroundColor: '#ffffff00',
      display: 'flex',
      width: '800px',
      "max-width": '800px',
      flexDirection: 'column',
      padding: '0 30px 0 0'
    },
    children: [
      {
        id: generateId(),
        type: 'container' as ElementType,
        styles: {
          backgroundColor: '#ffffff00',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 0 32px 0'
        },
        children: [
          {
            id: generateId(),
            type: 'heading' as ElementType,
            content: 'Restore Your Health From the Inside Out –',
            styles: {
              fontSize: '70px',
              fontWeight: '700',
              fontStyle: 'normal',
              color: '#fff',
              margin: '0',
            }
          },
          {
            id: generateId(),
            type: 'heading' as ElementType,
            content: 'Naturally & Effortlessly!',
            styles: {
              fontSize: '70px',
              fontWeight: '700',
              fontStyle: 'italic',
              color: '#FBBC04',
              margin: '0',
            }
          }
        ]
      },
      {
        id: generateId(),
        type: 'paragraph',
        content: 'Experts Reveal a Breakthrough Formula That Supports Digestion, Energy & Immunity - No Dieting, No Guesswork!',
        styles: {
          fontSize: '28px',
          color: '#FFFFFF',
          fontWeight: '500',
        },
      },
      {
        id: generateId(),
        type: 'container',
        styles: {
          backgroundColor: '#ffffff00',
          display: 'flex',
          gap: '20px',
          margin: '29px 0 0 0'
        },
        children: [
          {
            id: generateId(),
            type: 'image' as ElementType,
            src: '/fortigold/cert-1.png',
            alt: 'certificate-1',
            styles: {
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              margin: '0',
              padding: '0',
            },
          },
          {
            id: generateId(),
            type: 'image' as ElementType,
            src: '/fortigold/cert-2.png',
            alt: 'certificate-1',
            styles: {
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              margin: '0',
              padding: '0',
            },
          },
          {
            id: generateId(),
            type: 'image' as ElementType,
            src: '/fortigold/cert-3.png',
            alt: 'certificate-1',
            styles: {
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              margin: '0',
              padding: '0',
            },
          },
          {
            id: generateId(),
            type: 'image' as ElementType,
            src: '/fortigold/cert-4.png',
            alt: 'certificate-1',
            styles: {
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              margin: '0',
              padding: '0',
            },
          },
          {
            id: generateId(),
            type: 'image' as ElementType,
            src: '/fortigold/cert-5.png',
            alt: 'certificate-1',
            styles: {
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              margin: '0',
              padding: '0',
            },
          },
        ]
      }
    ]
  }

  return {
    id: generateId(),
    type: 'container' as ElementType,
    styles: {
      backgroundColor: '#00573F',
      padding: '15px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    children: [
      {
        id: generateId(),
        type: 'container' as ElementType,
        styles: {
          backgroundColor: '#ffffff00',
          display: 'flex',
          alignItems: 'center',
        },
        children: [
          titlePart,
          {
            id: generateId(),
            type: 'container' as ElementType,
            styles: {
              backgroundColor: '#ffffff00',
              display: 'flex',
            },
            children: [
              {
                id: generateId(),
                type: 'image' as ElementType,
                src: '/fortigold/fortigold-bottle-1.png',
                alt: 'Restaurant hero image',
                styles: {
                  width: '400px',
                  height: '540px',
                  objectFit: 'fit',
                  margin: '0',
                  padding: '0',
                },
              },
            ]
          }
        ]
      }, 
      // {
      //   id: generateId(),
      //   type: 'container' as ElementType,
      //   children: [

      //   ]
      // }
    ]
  }
};

export const fortigoldTemplate = {
  header: createHeaderContainer(),
  firstSection:  createFirstSectionContainer(),
}