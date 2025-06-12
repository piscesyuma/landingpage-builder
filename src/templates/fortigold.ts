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

const firstSectionContainer = {
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
  ]
}

export const fortigoldTemplate = [
  createHeaderContainer(),
  firstSectionContainer,
]